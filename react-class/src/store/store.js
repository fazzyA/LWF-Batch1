import {configureStore} from '@reduxjs/toolkit'
// import myreducer from './reducer'
import reducer from './slice'

const store = configureStore(
    {
        reducer
    }
)
export default store