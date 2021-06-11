/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, {useState} from 'react'

export type ContextType = {
  currentThreats: {
    id: number
    message: string
    value: string
    acknowledged: boolean
  }[]
  currentAlerts: {
    id: number
    message: string
    value: string
    acknowledged: boolean
  }[]
  currentAnalyzedAlert: {
    id: number
    message: string
    value: string
    acknowledged: boolean
  }[]
  errorMessage: string

  setCurrentThreats: (
    item: {id: number; message: string; value: string; acknowledged: boolean}[],
  ) => void
  setCurrentAlerts: (
    item: {id: number; message: string; value: string; acknowledged: boolean}[],
  ) => void
  setErrorMessage: (item: string) => void
  setCurrentAnalyzedAlert: (
    item: {id: number; message: string; value: string; acknowledged: boolean}[],
  ) => void
}

const Context = React.createContext<ContextType>(undefined!)

const Provider = ({children}: any): any => {
  const [currentThreats, setCurrentThreats] = useState<
    {id: number; message: string; value: string; acknowledged: boolean}[]
  >([])
  const [currentAlerts, setCurrentAlerts] = useState<
    {id: number; message: string; value: string; acknowledged: boolean}[]
  >([])
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [currentAnalyzedAlert, setCurrentAnalyzedAlert] = useState<
    {id: number; message: string; value: string; acknowledged: boolean}[]
  >([])

  return (
    <Context.Provider
      value={{
        // values
        currentThreats,
        currentAlerts,
        errorMessage,
        currentAnalyzedAlert,

        // functions
        setCurrentThreats,
        setCurrentAlerts,
        setErrorMessage,
        setCurrentAnalyzedAlert,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export {Context, Provider}
