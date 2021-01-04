export function addtodo(todo){
    return {
        type: 'ADD',
        payload:todo
    }
}
export function deletetodo(id){
    return {
        type: 'DELETE',
        payload: id
    }
}