import React, { Component } from "react";

class LifecycleLogger extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor called");
    this.state = {
      clickCount: 0,
    };
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update");
    if (this.state.clickCount !== prevState.clickCount) {
      console.log(`Click count updated: ${this.state.clickCount}`);
    }
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  handleButtonClick = () => {
    this.setState((prevState) => ({
      clickCount: prevState.clickCount + 1,
    }));
  };

  render() {
    console.log("Render called");
    return (
      <div>
        <button onClick={this.handleButtonClick}>Click me!</button>
        <div>Click count: {this.state.clickCount}</div>
      </div>
    );
  }
}

export default LifecycleLogger;
