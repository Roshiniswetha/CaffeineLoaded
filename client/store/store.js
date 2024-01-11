import { configureStore } from '@reduxjs/toolkit'
import signupSlice from './slices/signupSlice'
import signinSlice from './slices/signinSlice'

export const store = configureStore({
    reducer: {
        signUp: signupSlice.reducer,
        signIn: signinSlice.reducer,
    }
})