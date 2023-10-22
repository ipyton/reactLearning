import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
    
    //initialize the state
    state = {
        todos:[
            {id:'1', name:'xxx', done:true},
            {id:'2', name:'yyy', done:false},
            {id:'3', name:'zzz', done:true},
            {id:'4', name:'qqq', done:false}
        ]
    }

    addTodo = (todoObj)=>{
        const {todos} = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({todos:newTodos})
    }

    updateTodo = (id, done)=>{
        const {todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            if (todoObj.id === id) return {...todoObj,done}
            else return todoObj
        })
        this.setState({todos:newTodos})
    }

    deleteTodo = (id)=>{
        const {todos} = this.state
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id
        })
        this.setState({todos:newTodos})
    }

    checkAllTodo = (done)=>{
        const {todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj, done}
        })
        this.setState({todos:newTodos})
    }

    clearAllDone = ()=>{
        const {todos} = this.state
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done
        })
        this.setState({todos:newTodos})
    }

    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}></Header>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}></Footer>
                </div>
            </div>
        )
    }


}

