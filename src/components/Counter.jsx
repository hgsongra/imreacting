import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatedCount()}</span>
        <button
          onClick={() => this.props.onIncrease(this.props.counter)}
          className='btn btn-secondary btn-sm'>
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className='btn btn-danger btn-sm m-2'>
          Delete
        </button>
      </div>
    );
  }

  formatedCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

  getBadgeClasses() {
    let countLabel = "badge m-2 badge-";
    countLabel += this.props.counter.value === 0 ? "warning" : "primary";
    return countLabel;
  }
}

export default Counter;
