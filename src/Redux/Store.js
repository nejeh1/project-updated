import { configureStore } from '@reduxjs/toolkit'
import coursesReducer from './Slice/coursesSlice'
export const Store=configureStore({
    reducer:{
        coursesReducer
    }
})