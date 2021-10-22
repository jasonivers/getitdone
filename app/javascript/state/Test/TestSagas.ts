import { takeLatest, put, delay, all, fork } from "redux-saga/effects";
import testActionTypes from "./TestConstants";
import * as TestActions from "./TestActions";

function* updateMessageAsync(action) {
  // Simulating API call/async behavior
  yield delay(2000);

  try {
    yield put(TestActions.updateMessageSuccess(action.payload.message));

    // Tests error handling
    //throw("Call failed")
  } catch (error) {
    yield put(TestActions.updateMessageFailure(error.toString()));
  }
}

function* updateMessageSaga() {
  yield takeLatest(testActionTypes.UPDATE_MESSAGE_REQUEST, updateMessageAsync);
}

export default function* rootSagaTest() {
  yield all([fork(updateMessageSaga)]);
}