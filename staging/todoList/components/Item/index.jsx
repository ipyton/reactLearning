import React, {Component} from 'react'
import './index.css'

export default class Item extends Component {
    state = {mouse:false}

    handleMouse = (flag) => {
        return ()=>{
            this.setState({mouse:flag})
        }
    }

    handleCheck = (id) => {
        return (event)=>{
            this.props.updateTodo(id, event.target.checked)
        }
    }
    


    handleDelete = (id)=>{
        if (window.confirm("do you want to delete?")) {
            this.props.deleteTodo(id)
        }
    }

    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor:mouse ? '#ff3855' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type='checkbox' checked={done} onChange={this.handleCheck(id)}/>
                    {name}
                </label>
                <button onClick={()=>this.handleDelete(id)} className='btn btn-danger' style={{display:mouse?'block':'none'}}>delete</button>
            </li>
        )


    }
}
