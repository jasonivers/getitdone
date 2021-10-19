import testActionTypes from "./TestConstants";

export function updateMessageRequest(message: string) {
  return {
    type: testActionTypes.UPDATE_MESSAGE_REQUEST,
    payload: {
      message: message,
    },
  };
}

export function updateMessageSuccess(message: string) {
  return {
    type: testActionTypes.UPDATE_MESSAGE_SUCCESS,
    payload: {
      message: message,
    },
  };
}

export function updateMessageFailure(error: string) {
  return {
    type: testActionTypes.UPDATE_MESSAGE_FAILURE,
    payload: {
      error: error,
    },
  };
}
