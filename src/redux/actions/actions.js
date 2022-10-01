import { createAction,nanoid } from "@reduxjs/toolkit";

export const add = createAction('items/add', ({name,number}) => {
    return {
        payload: {
            name,
            number,
            id: nanoid()
        }
    }
});

export const remove = createAction('items/remove', () => {
    return 
});