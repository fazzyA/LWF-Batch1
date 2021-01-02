import React from 'react'
const initialState = {
    num: 0,
    num2:2
}
export default function myReducer(state=initialState, action) {
    switch (action.type) {
        case 'INC':
            console.log('inc')
            let newState = {...state, num: ++state.num}
            return newState
        case 'DEC':
            console.log('ddfdsfec')
            return {...state, num: --state.num}

        default:
            return state
    }

}