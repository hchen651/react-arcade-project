import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "../../pages/Home";
import Browse from "../../pages/Browse";
import GameInterface from "../../pages/GameInterface";
import User from "../../pages/User";
import About from "../../pages/About";

export default class AllRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/browse" component={Browse} />
                <Route exact path="/game" component={GameInterface} />
                <Route exact path="/user" component={User} />
                <Route exact path="/about" component={About} />
            </Switch>
        )
    }
}