import testActionTypes from "./TestConstants";

export function updateMessage(message: string) {
  return {
    type: testActionTypes.UPDATE_MESSAGE,
    payload: {
      message: message,
    },
  };
}