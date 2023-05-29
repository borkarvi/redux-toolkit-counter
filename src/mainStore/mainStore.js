import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterStore/counterSlice';
import counterByInputSlice from './counterStoreInput/counterByInputSlice';


const store = configureStore({
    reducer: {
        counterStore : counterSlice.reducer,
        counterInputStore: counterByInputSlice.reducer
    }
})

export default store;