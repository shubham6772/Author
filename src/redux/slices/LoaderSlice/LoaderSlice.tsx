import { createSlice } from "@reduxjs/toolkit";

interface LoaderState {
    isLoading : boolean,
}

const initialState : LoaderState = {
    isLoading : false,
}

const LoaderSlice = createSlice({
    name : 'LoaderSlice',
    initialState,
    reducers : {
        toggleLoader : (state) => {
            return {
                isLoading : !state.isLoading,
            }
        },


    }
})


export const{toggleLoader} = LoaderSlice.actions;
export default LoaderSlice.reducer;