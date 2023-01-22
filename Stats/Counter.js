import React from "react";
import "./Counter.css";

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
    console.log("construtor method is called");
    this.increment = this.increment.bind(this);
  }

  //   increment = () => {
  //     // never update the state directly
  //     // console.log(this.state.count);
  //     // this.state.count++;

  //     this.setState({ count: this.state.count + 1 }); // it triggers the re renders
  //   };

  increment() {
    this.setState({ count: this.state.count + 1 }); // it triggers the re renders
  }

  //   static getDerivedStateFromProps() {
  // if we want change anything between constructor & render method then we can use it method
  //     console.log("getDerivedStateFromProps");
  //   }

  componentDidMount() {
    console.log("component did mount is called");
    console.log("=================>>>>>");
  }

  componentDidUpdate() {
    console.log("component did update is called");
  }

  componentWillUnmount() {
    console.log("component will unMount is called");
  }

  render() {
    console.log("render method is called");
    return (
      <div className="Counter">
        <h1>Counter : {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
