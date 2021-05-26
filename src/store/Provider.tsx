import React, {useState} from 'react'

export type ContextType = {
  currentThreats: string[]
  setCurrentThreats: (item: string[]) => void
}

const Context = React.createContext<ContextType>(undefined!)

const Provider = ({children}: any): any => {
  const [currentThreats, setCurrentThreats] = useState<string[]>([])

  return (
    <Context.Provider
      value={{
        // values
        currentThreats,
        // functions
        setCurrentThreats,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export {Context, Provider}
