import React, {Component} from "react";
import { NavLink, Route } from "react-router-dom";
import Home from './pages/Home';
import About from "./pages/About";
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";

export default class App extends Component {
    render() {
        return (
        <div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <Header/>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        <MyNavLink to="/about">About</MyNavLink>
						<MyNavLink to="/home">Home</MyNavLink>
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