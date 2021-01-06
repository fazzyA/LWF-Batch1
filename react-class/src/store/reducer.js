import { createReducer } from '@reduxjs/toolkit'
import { incrementAction, decrementAction} from './actions'
const initialState = {
    counter: 0,
    num:1
}
const myreducer = createReducer(
    initialState, {
        [incrementAction]: (state)=> {counter:++state.counter},
        [decrementAction]: (state)=> {counter:--state.counter}
    }
)
export default myreducer