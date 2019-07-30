import React, { Component } from "react";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

export default class App extends Component {
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
        <NavBar total={this.state.counters.length} />
        <main className='comtainer'>
          <Counters
            counters={this.state.counters}
            onReset={this.resetCounters}
            onDelete={this.deleteCounter}
            onIncrement={this.incrementCounter}
          />
        </main>
      </>
    );
  }
}
