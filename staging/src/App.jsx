import React, {Component} from "react";
import { Link, Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from './components/Home';
import About from "./components/About";


export default class App extends Component {
    render() {
        return (
        <div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group"><h2>React Router Demo</h2></div>
                </div>
            </div>

            <div className="row">
                <div>
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <Link className="list-group-item" to="/about">About</Link>
                            <Link className="list-group-item" to="/home">Home</Link>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <Route path="/about" component={About}></Route>
                        <Route path="/home" component={Home}></Route>
                    </div>
                </div>
            </div>
        </div>)
    }
}