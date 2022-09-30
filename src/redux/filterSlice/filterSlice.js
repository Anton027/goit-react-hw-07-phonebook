import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = {status:''};

export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
        setStatusFilter(state,action) {
            state.status = action.payload;
        },
    }
})

export const { setStatusFilter } = filterSlice.actions;
