import { createSlice } from "@reduxjs/toolkit";

interface bookDetailPageSliceState{
    cartQuantity: string
}

const initialState : bookDetailPageSliceState = {
    cartQuantity : "1",
}

export const BookDetailsPageSlice = createSlice({
    name  : 'BookDetailsPageSlice',
    initialState,
    reducers : {
        setCartQuantity : (state, action) => {
            return {
                ...state, 
                cartQuantity : action.payload,
            }
        }
    }
})


export const { setCartQuantity } = BookDetailsPageSlice.actions;
export default BookDetailsPageSlice.reducer;