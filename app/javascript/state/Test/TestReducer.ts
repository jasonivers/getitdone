import testActionTypes from "./TestConstants";

export const testInitialState = {
  message: "Hello World!",
};

const testReducer = (state = testInitialState, action) => {
  //let newState = {...state};

  switch (action.type) {
    case testActionTypes.UPDATE_MESSAGE:
      return {
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default testReducer;