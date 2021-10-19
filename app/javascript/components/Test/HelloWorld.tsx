import * as React from "react";

import { connect, DispatchProp } from "react-redux";
import { bindActionCreators, Dispatch, Action, AnyAction } from "redux";
import * as TestActions from "../../state/Test/TestActions";

const mapStateToProps = (state) => {
  return {
    testStore: state.testReducer,
  };
};

// TODO - testStore should have its own interface or type imported from within the state/Test folder
// That should be the standard for all sub-stores going forwards - this current way of doing things sucks
interface Props<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
  testStore: {
    message: string;
    error: string;
  };
}

interface State {
  newMessage: string;
}

class HelloWorld extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      newMessage: "",
    };

    this.handleNewMessageInput = this.handleNewMessageInput.bind(this);
    this.submitNewMessage = this.submitNewMessage.bind(this);
  }

  actions = bindActionCreators(TestActions, this.props.dispatch);

  handleNewMessageInput = (e) => {
    this.setState({
      newMessage: e.target.value,
    });
  };

  submitNewMessage = (e) => {
    e.preventDefault();

    this.actions.updateMessageRequest(this.state.newMessage);
    this.setState({
      newMessage: "",
    });
  };

  render() {
    const { error } = this.props.testStore;

    return (
      <div>
        <h1>{this.props.testStore.message}</h1>
        <input
          type="text"
          value={this.state.newMessage}
          onChange={this.handleNewMessageInput}
        />
        <button type="submit" onClick={this.submitNewMessage}>
          Update Message
        </button>
        {error && <h2 style={{ color: "red" }}>***{error}***</h2>}
      </div>
    );
  }
}

export default connect(mapStateToProps)(HelloWorld);
