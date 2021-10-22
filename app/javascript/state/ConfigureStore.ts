import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all, fork} from "redux-saga/effects";

import testReducer, { testInitialState } from "./Test/TestReducer";
import rootSagaTest from "./Test/TestSagas";

const sagaMiddleware = createSagaMiddleware();

// If this gets especially large/complex you may want to move it to a distinct RootSaga file
function* rootSaga() {
  yield all([fork(rootSagaTest)]);
}

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
  sagaMiddleware.run(rootSaga);
  
  return store;
}


export default configureStore;