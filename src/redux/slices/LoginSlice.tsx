import { createSlice } from "@reduxjs/toolkit"; 

interface LoginState {
    mode : string,
    auth : boolean,
}

const initialState : LoginState = {
    mode : 'login',
    auth : false,
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

        setAuthSuccess : (state) => {
            return{
                ...state,
                auth : true,
            }
        },

        setAuthFail : (state) => {
            return{
                ...state,
                auth : false,
            }
        }
    }
})

export const {toggleMode, setAuthFail, setAuthSuccess} = LoginSlice.actions;
export default LoginSlice.reducer;