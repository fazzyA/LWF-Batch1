import React, { Component } from 'react'

export default class ShowClasss extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0,
            name: 'faiza',
            name2: 'Abeer'
        }

    }

    render() {
        const inc = () => {
            console.log('im in inc')
            this.setState({
                num: this.state.num + 1
            })

        }
        const dec = () => {
            console.log('im in dec')
            this.setState(
                {
                    num: --this.state.num
                }
            )
        }
// const changeName = () =>{
//     this.setState({
//         name: 'Faiza Aziz Khan'
//     })
// }
        return (
            <div>
                <h3>Class comp</h3>
                current value {this.state.num}<br/>
                <button onClick={()=>inc()}>+</button>
                <button onClick={() => dec()}>-</button><br/>
                Name = {this.state.name}<br/>
                <button onClick={()=>this.setState({name:'FaizaAzizKhan'})}>see my full Name</button>

            </div>
        )
    }
}
