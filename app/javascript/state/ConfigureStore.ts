import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import testReducer, { testInitialState } from "./Test/TestReducer";

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const combinedState = {
    testReducer: testInitialState,
  };

  const combinedReducer = combineReducers({
    testReducer,
  });

  const rootReducer = (state, action) => {
    if (action.type === "RESET_STORE") {
      return combinedReducer(undefined, action);
    }

    return combinedReducer(state, action);
  }

  const store = createStore(rootReducer, combinedState, applyMiddleware(sagaMiddleware));

  // Run sagas (sagaMiddleware.run()) here? Or does that need to be done w/in the root App file?
  
  return store;
}


export default configureStore;