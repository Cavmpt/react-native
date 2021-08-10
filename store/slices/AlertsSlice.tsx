import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {fetchThreats} from '../../helpers/fetch-call-repo'
// import use stompsjs to fetch the info

// Define a type for the slice state
interface IAlertsSlice {
  currentThreats: {
    id: number
    message: string
    value: string
  } | undefined

  currentAlerts: {
    id: number
    message: string
    value: string
  }[] | undefined
  currentAnalyzedThreatOrAlert: {id: number; message: string; value: string; type: string} | undefined
}

// Define the initial state using that type
const initialState: IAlertsSlice = {
  currentThreats: undefined,
  currentAlerts: undefined,
  currentAnalyzedThreatOrAlert: undefined,
}

export const userSlice = createSlice({
  name: 'Threats',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    fetchAllThreats: (state) => {
      state.currentAlerts = fetchThreats()
    },
    fetchSingleThreat: (state) => {
      state.currentAlerts = fetchSingleThreats()
    }
  },
})

export const { fetchThreats } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type

const selectUsername = (state: RootState) => state.user.currentThreats

export {selectUsername, selectPassword}

export default userSlice.reducer