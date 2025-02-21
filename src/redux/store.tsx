import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./slices/LoginSlice";
import LoaderSlice from "./slices/LoaderSlice/LoaderSlice";
import QuestionSlice from './slices/QuestionSlice/QuestionSlice'
import BookListPageSlice from './slices/BookListPageSlice/BookListPageSlice'

export const store = configureStore({
    reducer : {
        LoginSlice,
        LoaderSlice,
        QuestionSlice,
        BookListPageSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;