/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, {useState} from 'react'

export type ContextType = {
  currentThreats: {name: string}[]
  currentAlerts: {id: number; message: string; value: string}[]
  error: string
  setCurrentThreats: (item: {name: string}[]) => void
  setCurrentAlerts: (
    item: {id: number; message: string; value: string}[],
  ) => void
  setErrorMessage: (item: string) => void
}

const Context = React.createContext<ContextType>(undefined!)

const Provider = ({children}: any): any => {
  const [currentThreats, setCurrentThreats] = useState<{name: string}[]>([])
  const [currentAlerts, setCurrentAlerts] = useState<
    {id: number; message: string; value: string}[]
  >([])
  const [error, setErrorMessage] = useState<string>('')

  return (
    <Context.Provider
      value={{
        // values
        currentThreats,
        currentAlerts,
        error,

        // functions
        setCurrentThreats,
        setCurrentAlerts,
        setErrorMessage,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export {Context, Provider}
