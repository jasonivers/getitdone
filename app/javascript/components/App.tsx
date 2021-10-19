import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import configureStore from "../state/ConfigureStore";

import HelloWorld from "./Test/HelloWorld";

const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={withRouter(HelloWorld)} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
