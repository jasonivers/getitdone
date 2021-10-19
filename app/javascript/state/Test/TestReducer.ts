import testActionTypes from "./TestConstants";

export const testInitialState = {
  message: "Hello World!",
  error: null,
};

const testReducer = (state = testInitialState, action) => {
  //let newState = {...state};

  switch (action.type) {
    case testActionTypes.UPDATE_MESSAGE_SUCCESS:
      return {
        message: action.payload.message,
        error: null,
      };
    case testActionTypes.UPDATE_MESSAGE_FAILURE:
      return {
        message: null,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default testReducer;