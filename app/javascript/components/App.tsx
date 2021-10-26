import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import configureStore from "../state/ConfigureStore";

import Home from "./Home/Home";
import SignIn from "./Auth/SignIn";
import HelloWorld from "./Test/HelloWorld";

const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={withRouter(Home)} />
            <Route exact path="/app/home" component={withRouter(Home)} />
            <Route exact path="/app/signin" component={withRouter(SignIn)} />
            <Route path="/app/oauth_callback" component={withRouter(HelloWorld)} />
            <Route path="/app" component={withRouter(HelloWorld)} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
