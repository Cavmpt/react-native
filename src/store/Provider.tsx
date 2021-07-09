/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, {useState} from 'react'

export type ContextType = {
  currentThreats: {
    id: number
    message: string
    value: string
  }[]
  currentAlerts: {
    id: number
    message: string
    value: string
  }[]
  currentAnalyzedThreatOrAlert:
    | {id: number; message: string; value: string; type: string}
    | undefined

  errorMessage: string

  setCurrentThreats: (
    item: {id: number; message: string; value: string}[],
  ) => void
  setCurrentAlerts: (
    item: {id: number; message: string; value: string}[],
  ) => void
  setCurrentAnalyzedThreatOrAlert: (
    item:
      | {
          id: number
          message: string
          value: string
          type: string
        }
      | undefined,
  ) => void
  setErrorMessage: (item: string) => void
}

const Context = React.createContext<ContextType>(undefined!)

const Provider = ({children}: any): any => {
  const [currentThreats, setCurrentThreats] = useState<
    {id: number; message: string; value: string}[]
  >([])
  const [currentAlerts, setCurrentAlerts] = useState<
    {id: number; message: string; value: string}[]
  >([])
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [currentAnalyzedThreatOrAlert, setCurrentAnalyzedThreatOrAlert] =
    useState<{id: number; message: string; value: string; type: string}>()
  return (
    <Context.Provider
      value={{
        // values
        currentThreats,
        currentAlerts,
        errorMessage,
        currentAnalyzedThreatOrAlert,

        // functions
        setCurrentThreats,
        setCurrentAlerts,
        setErrorMessage,
        setCurrentAnalyzedThreatOrAlert,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export {Context, Provider}
