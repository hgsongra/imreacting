import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value
  };
  formatedCount = () => {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatedCount()}</span>
        <button
          onClick={this.incrementCount}
          className='btn btn-secondary btn-sm'>
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let countLabel = "badge m-2 badge-";
    countLabel += this.state.count === 0 ? "warning" : "primary";
    return countLabel;
  }
}

export default Counter;
