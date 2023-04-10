import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    value: new Date()
}

export const dateSlice = createSlice({
    name: "date",
    initialState,
    reducers: {

    }
})

export default dateSlice.reducer