import React, {useState} from 'react'

export type ContextType = {
  currentAccount: string
  setCurrentAccount: (item: string) => void
}

const Context = React.createContext<ContextType>(undefined!)

const Provider = ({children}: any): any => {
  const [currentAccount, setCurrentAccount] = useState('')

  return (
    <Context.Provider
      value={{
        // values
        currentAccount,
        // functions
        setCurrentAccount,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export {Context, Provider}
