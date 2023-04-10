import { configureStore } from "@reduxjs/toolkit";
import dateReducer from "../feature/date";

export const store = configureStore({
    reducer: {
        date: dateReducer,
    },
})