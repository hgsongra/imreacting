import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    return (
      <>
        <button
          className='btn btn-primary btn-sm m-2'
          onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrease={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </>
    );
  }
}

export default Counters;
