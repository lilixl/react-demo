import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Hello from "../containers/Hello";
import Home from "../containers/Home";
import ExampleProps from "../containers/ExampleProps";
import ExampleState from "../containers/ExampleState";
import Condition from "../containers/Condition";
import List from "../containers/List";
import Form from "../containers/Form";
import LiftingStateUp from "../containers/LiftingStateUp";
import ComponentDom from "../containers/Dom"

class RouterMap extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Hello} />
          <Route exact path="/home" render={() => <Redirect to="/props" />} />
          <Route
            render={props => (
              <Home {...props}>
                <Route path="/props" component={ExampleProps} />
                <Route path="/state" component={ExampleState} />
                <Route path="/condition" component={Condition} />
                <Route path="/list" component={List} />
                <Route path="/form" component={Form} />
                <Route path="/liftingStateUp" component={LiftingStateUp} />
                <Route path="/dom" component={ComponentDom} />  
              </Home>
            )}
          />
        </Switch>
      </HashRouter>
    );
  }
}

export default RouterMap;
