import {configureStore} from '@reduxjs/toolkit'
import userSliceReducer from './Slices/userSlice.js'
import authSliceReducer from './Slices/authSlice.js'
import commentSliceReducer from './Slices/commentSlice.js'

const store = configureStore({
reducer :{
    user:userSliceReducer,
    auth:authSliceReducer,
    comment:commentSliceReducer,
}
})


export default store