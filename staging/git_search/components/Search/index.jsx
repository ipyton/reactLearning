import React, {Component} from "react";
import PubSub from 'pubsub-js';
import axios from 'axios';

export default class Search extends Component {

    search1 = () => {
        const {keyWordElement: {value:keyWord}} = this
        this.props.updateAppState({isFirst:false, isLoading:true})
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response => {
                this.props.updateAppState({isLoading:false, users:response.data.items})
            },
            error => {
                this.props.updateAppState({isLoading:false, err:error.message})
            }
        )
    }

    search = () => {
        const {keyWordElement: {value:keyWord}} = this
        PubSub.publish('state',{isFirst:false, isLoading:true})
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response => {
                PubSub.publish('state', {isLoading:false,users:response.data.items})
            },
            error => {
                PubSub.publish('state',{isLoading:false, err:error.message})
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">search for github users</h3>
                <div>
                    <input ref={c=>this.keyWordElement = c} type="text" placeholder="please type keyword"></input>
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }

}