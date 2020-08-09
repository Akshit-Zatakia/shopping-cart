import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  // For demo only
  /*styles = {
    fontSize: 50,
    fontWeight: "bold",
    
  };*/
  /*style={this.styles} in span tag*/

  // For binding this in handleIncrement
  //constructor() {
  //  super();
  //  this.handelIncrement = this.handelIncrement.bind(this);
  //}

  handelIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handelIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
