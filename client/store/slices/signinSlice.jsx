import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const signinSlice = createSlice({
            name: 'signin',
            initialState: {
                name: '',
                email: '',
                password: '',
            },
            reducers:{
                getSignInName(state,action){
                    state.name = action.payload
                },
                getSignInEmail(state,action){
                    state.email = action.payload
                },
                getSignInPassword(state,action){
                    state.password = action.payload
                }
    }
})

export const sendLoginData = ({email,password}) => {
    return async(dispatch) => {
        try {
            const response = await axios.post('http://localhost:5000/auth/login',{email,password})
            const data = response.data;
            dispatch(signinActions.getSignInEmail(data.email))
            dispatch(signinActions.getSignInName(data.name))
            return response
        } catch(err) {
            throw new Error(err)
        }
    }
}


export const signinActions = signinSlice.actions;
export default signinSlice;