import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface userState {
  username: string
  password: string
}

// Define the initial state using that type
const initialState: userState = {
  username: '',
  password: ''
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  },
})

export const { setUsername, setPassword } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type

const selectUsername = (state: RootState) => state.user.username
const selectPassword = (state: RootState) => state.user.password

export {selectUsername, selectPassword}

export default userSlice.reducer