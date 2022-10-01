import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://6336bb015327df4c43c82af1.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (_, thunkApi) => {
        try {
            const res = await axios.get('/contacts');
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue("Sorry, page is not found...")
        }
    })

export const addItem = createAsyncThunk('contacts/addItem',
    async ({ name, phone }, thunkApi) => {
    try {
        const res = await axios.post('/contacts', { name, phone });
        return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue("Sorry, page is not found...")
    }
});

export const removeItem = createAsyncThunk('contacts/removeItem',
    async (itemId, thunkApi) => {
        try {
            const res = await axios.delete(`/contacts/${itemId}`);
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue("Sorry, page is not found...")
        }
    });