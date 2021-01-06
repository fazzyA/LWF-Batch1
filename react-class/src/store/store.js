import {configureStore} from '@reduxjs/toolkit'
import myreducer from './reducer'

const store = configureStore(
    {
        reducer:myreducer
    }
)
export default store