import {configureStore} from '@reduxjs/toolkit'
import userSliceReducer from './Slices/userSlice.js'

const store = configureStore({
reducer :{
    user:userSliceReducer,
}
})


export default store