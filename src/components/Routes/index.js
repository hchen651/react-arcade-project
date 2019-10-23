import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "../../pages/Home";
import About from "../../pages/About";
import Collection from "../../pages/Collection";
import Contact from "../../pages/Contact";
import Detail from "../../pages/Detail";


export default class AllRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Content} />
                <Route exact path="/signin" component={Signin} />
            </Switch>
        )
    }
}