import { createReducer } from "@reduxjs/toolkit";
import { add, remove } from "redux/actions/actions";

const itemsInitialState = [];

export const itemsReducer = createReducer(itemsInitialState, {
    [add](state, action) {state.push(action.payload)},
    [remove](state, action) {
        return state.filter(contact =>
            contact.id !== action.payload
    )}
})