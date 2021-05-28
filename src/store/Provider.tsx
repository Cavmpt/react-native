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
    {name: 'dogs in the at back'},
    {name: 'danger at the front'},
    {name: 'squirrel left'},
  ])
  const [currentAlerts, setCurrentAlerts] = useState<any[]>([
    {name: 'Movement Detected at the entrance'},
    {name: 'Movement Detected at the exit'},
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
