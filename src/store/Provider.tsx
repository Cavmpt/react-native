import React, {useState} from 'react'

export type ContextType = {
  currentThreats: any[]
  currentAlerts: any[]
  setCurrentThreats: (item: any[]) => void
  setCurrentAlerts: (item: any[]) => void
}

const Context = React.createContext<ContextType>(undefined!)

const Provider = ({children}: any): any => {
  const [currentThreats, setCurrentThreats] = useState<any[]>([{name: 'hello'}])
  const [currentAlerts, setCurrentAlerts] = useState<any[]>([{name: 'hello'}])
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
