import { configureStore } from "@reduxjs/toolkit";
import { itemsReduser } from "./contactsSlice/slice";
import { filterSlice } from "./filterSlice/filterSlice";



export const store = configureStore({
    reducer: {
        contacts: itemsReduser, 
        filter: filterSlice.reducer,
    },
});




