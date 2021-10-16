import * as React from "react"

interface myProps {
  greeting: String
}

class HelloWorld extends React.Component<myProps> {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

export default HelloWorld
