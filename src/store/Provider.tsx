/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, {useState} from 'react'

export type ContextType = {
  currentThreats: {name: string}[]
  currentAlerts: {name: string}[]
  imagesAlerts: {id: number; value: string}[]

  setCurrentThreats: (item: {name: string}[]) => void
  setCurrentAlerts: (item: {name: string}[]) => void
  setImagesAlerts: (item: {id: number; value: string}[]) => void
}

const Context = React.createContext<ContextType>(undefined!)

const Provider = ({children}: any): any => {
  const [currentThreats, setCurrentThreats] = useState<{name: string}[]>([])
  const [currentAlerts, setCurrentAlerts] = useState<{name: string}[]>([])
  const [imagesAlerts, setImagesAlerts] = useState<
    {id: number; value: string}[]
  >([])

  return (
    <Context.Provider
      value={{
        // values
        currentThreats,
        currentAlerts,
        imagesAlerts,

        // functions
        setCurrentThreats,
        setCurrentAlerts,
        setImagesAlerts,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export {Context, Provider}
