import {createSlice} from '@reduxjs/toolkit'

const mainSlice = createSlice({
    /// name state reducers
    name: 'todo',
    initialState: {
        counter:0,
        todos: [{title:'task1',id:1}]
    },
    reducers: {
        incrementAction(state, action){
            //return {...state, counter:++state.counter}
            state.counter = ++state.counter
        },
        decrementAction(state, action){
            state.counter = --state.counter

        },
        addtodo(state,action){
            console.log(action.payload)
            state.todos.push(action.payload)

        },
        deletetodo(state,action){
            console.log('im in delete')
        }

    }
});
export const {incrementAction,decrementAction,addtodo,deletetodo} = mainSlice.actions
export const myreducer = mainSlice.reducer