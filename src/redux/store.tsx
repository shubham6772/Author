import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./slices/LoginSlice";
import LoaderSlice from "./slices/LoaderSlice/LoaderSlice";
import QuestionSlice from './slices/QuestionSlice.tsx/QuestionSlice'

export const store = configureStore({
    reducer : {
        LoginSlice,
        LoaderSlice,
        QuestionSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;