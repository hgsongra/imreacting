import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  incrementCounter = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  resetCounters = () => {
    const counters = this.state.counters.map(cnt => {
      cnt.value = 0;
      return cnt;
    });
    this.setState({ counters });
  };

  deleteCounter = counterId => {
    const counters = this.state.counters.filter(cnt => cnt.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <>
        <button
          className='btn btn-primary btn-sm m-2'
          onClick={this.resetCounters}>
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.deleteCounter}
            onIncrease={this.incrementCounter}
            counter={counter}
          />
        ))}
      </>
    );
  }
}

export default Counters;
