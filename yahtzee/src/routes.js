import React from "react";
// The Switch component allows me group a set of Routes together and render the first
// one that matches the current location
import { Route, Switch } from "react-router-dom";

// imports the components we will use in routing
import Dice from './components/Dice';
import Home from './components/Home';
import Game from './components/Game';
import Scorecard from './components/Scorecard';

const Routes = ()=> {
    return (
        <Switch>
            {/* The exact prop ensures it will only match the root route and 
            will not match any other rout that starts with '/' */}
            <Route exact path="/" component={Home} />
            <Route  path="/dice" component={Dice} />
            <Route  path="/game" component={Game} />
            <Route  path="/scorecard" component={Scorecard} />
        </Switch>
    );
}

export default Routes;