import React, { Component } from "react";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <main className='comtainer'>
          <Counters />
        </main>
      </>
    );
  }
}
