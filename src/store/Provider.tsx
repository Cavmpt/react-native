import React, {useState} from 'react'

export type ContextType = {
  currentThreats: any[]
  currentAlerts: any[]
  setCurrentThreats: (item: any[]) => void
  setCurrentAlerts: (item: any[]) => void
}

const Context = React.createContext<ContextType>(undefined!)

const Provider = ({children}: any): any => {
  const [currentThreats, setCurrentThreats] = useState<any[]>([
    {name: 'movement detected out at the back door'},
  ])
  const [currentAlerts, setCurrentAlerts] = useState<any[]>([
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
