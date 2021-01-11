import { createSlice } from '@reduxjs/toolkit'
const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        counter: 0,
        todos: []
},
    reducers: {
        incrementAction(state,action){
            //return {counter:++state.counter}
            state.counter = ++state.counter

        },
        decrementAction(state,action){
            //return {counter:--state.counter}
            state.counter = --state.counter

        },
        addtodo(state,action){
            console.log('in add')
            state.todos.push(action.payload)

        },
        deletetodo(state,action){
            console.log('in de')

        }


}
}
)
export const {addtodo, deletetodo,decrementAction,incrementAction} = todoSlice.actions
const reducer = todoSlice.reducer
export default reducer