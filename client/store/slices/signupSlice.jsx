import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const signupSlice = createSlice({
            name: 'signup',
            initialState: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            reducers:{
                getSignUpName(state,action){
                    state.name = action.payload
                },
                getSignUpEmail(state,action){
                    state.email = action.payload
                },
                getSignUpPassword(state,action){
                    state.password = action.payload
                },
    }
})

export const sendRegisterData = ({username,email,password}) => {
    return async(dispatch) => {
        const response = await axios.post('http://localhost:5000/auth/register',{username,email,password})
              .then(res => console.log(res.status))
              .catch(err => {throw new Error(err)})
        dispatch(signupActions.getSignUpName(username))
        dispatch(signupActions.getSignUpEmail(email))
    }
}


export const signupActions = signupSlice.actions;
export default signupSlice;