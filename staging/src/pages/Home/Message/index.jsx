import React, { Component } from 'react'
import {Link, Route } from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
	
    state = {
        messageArr:[
            {id:'01', title:'message1'},
            {id:'02', title:'message2'},
            {id:'03', title:'message3'},
        ]
    }
    
    render() {
        const {messageArr} = this.state
		return (
			<div>
				<ul>
					{
                        messageArr.map((msgObj)=>{
                            return (
                                <li key={msgObj.id}>
                                    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                                </li>
                            )
                        })
                    }
				</ul>

                <Route path="/home/message/detail/:id/:title" component={Detail}/>
                
			</div>
            // This is enough  <Route path="/home/message/detail" component={Detail}/>
            // <Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>
		)
	}
}
