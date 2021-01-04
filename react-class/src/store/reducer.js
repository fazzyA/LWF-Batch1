const initialState = [
    {title:'task1', id:1},
    {title:'task2', id:2},
    {title:'task2', id:3}
]
export default function myreducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
        console.log(action.payload)
        let newTodo = action.payload
        return [...state, newTodo]
        case 'DELETE':
            let id = action.payload
            let newState = state.filter(item=>item.id!=id)
            return newState

        default:
            return state

    }
}