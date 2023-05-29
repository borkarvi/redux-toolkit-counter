import { DECREMENT, INCREMENT } from "../storeTypes";
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: { 
        counter: 0,
        status: ''
    },
    reducers: {
        increment: (state) => {
            state.counter = state.counter + 1;
            state.status = INCREMENT 
        },
        decrement: (state) => {
            state.counter = state.counter - 1;
            state.status = DECREMENT
        }
    }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice;