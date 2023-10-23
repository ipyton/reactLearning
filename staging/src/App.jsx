import React, {Component} from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

    //this state is used only when the user use function to pass the state change.
    state = {
        users:[],
		isFirst:true,
		isLoading:false,
		err:'',
    }

    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {

        return (<div className='container'>
            <Search/>
            <List/>
        </div>)

        // return (<div className='container'>    
        //     <Search updateAppState={this.updateAppState}/>
        //     <List {...this.state}/>
        // </div>)
        
    }
}