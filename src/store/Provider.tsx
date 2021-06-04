/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, {useState} from 'react'

export type ContextType = {
  currentThreats: {name: string}[]
  currentAlerts: {name: string}[]
  setCurrentThreats: (item: {name: string}[]) => void
  setCurrentAlerts: (item: {name: string}[]) => void
}

const Context = React.createContext<ContextType>(undefined!)

const Provider = ({children}: any): any => {
  const [currentThreats, setCurrentThreats] = useState<{name: string}[]>([
    {name: 'movement detected out at the back door'},
  ])
  const [currentAlerts, setCurrentAlerts] = useState<{name: string}[]>([
    {name: 'unidentified individual in the front'},
  ])
  return (
    <Context.Provider
      value={{
        // values
        currentThreats,
        currentAlerts,
        // functions
        setCurrentThreats,
        setCurrentAlerts,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export {Context, Provider}
