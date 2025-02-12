import { createSlice } from "@reduxjs/toolkit"; 

interface LoginState {
    mode : string,
    auth : boolean,
}

const initialState : LoginState = {
    mode : 'login',
    auth : true,
}

const LoginSlice = createSlice({
    name: "LoginSlice",
    initialState,
    reducers : {
        toggleMode : (state) => {
             return{
                ...state, 
                mode : (state.mode == "login") ? "signup" : "login"
             }
        },

        toggleAuthState : (state) => {
            return{
                ...state,
                auth :!state.auth
            }
        }
    }
})

export const {toggleMode, toggleAuthState} = LoginSlice.actions;
export default LoginSlice.reducer;