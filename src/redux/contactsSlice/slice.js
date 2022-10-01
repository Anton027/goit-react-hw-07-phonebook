import { createSlice } from "@reduxjs/toolkit";
import {
    removeItem,
    addItem,
    fetchContacts
} from "redux/operations";

const handlePending = (state) => {
    state.isLoading = true
}
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

export const itemsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    reducers: {
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload
        },
        [fetchContacts.rejected]: handleRejected,
// =========== addItem =========================
        [addItem.pending]: handlePending,
        [addItem.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload)
        },
        [addItem.rejected]: handleRejected,
// ============ removeItem =====================
        [removeItem.pending]: handlePending,
        [removeItem.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const idx = state.items.findIndex(item => item.id === action.payload.id)
            state.items.splice(idx, 1);
        },
        [removeItem.rejected]: handleRejected,
    }
});

export const itemsReduser = itemsSlice.reducer;
