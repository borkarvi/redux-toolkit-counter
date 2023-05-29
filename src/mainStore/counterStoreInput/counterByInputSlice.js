import { createSlice } from '@reduxjs/toolkit';
const counterByInputSlice = createSlice({
    name: 'counterByInputSlice',
    initialState: {
        counterInput: 0,
        statusInput: ''
    },
    reducers : {
        incrementByInput: (state, action) => {
            console.log('action',action)
            state.counterInput = state.counterInput + parseInt(action.payload.inputValue);
            state.statusInput = action.payload.status 
        },
        decrementByInput: (state, action) => {
            console.log('action',action)
            state.counterInput = state.counterInput - parseInt(action.payload.inputValue);
            state.statusInput = action.payload.status 
        },
    }
})

export const {incrementByInput, decrementByInput } = counterByInputSlice.actions;

export default counterByInputSlice;