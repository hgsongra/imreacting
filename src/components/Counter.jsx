import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0
  }
  formatedCount = () => {
    const {count} = this.state
    return count === 0 ? 'Zero' : count
  }
  render() {
    return (
      <>
        <span className='badge badge-primary m-2'>{this.formatedCount()}</span>
        <button className='btn btn-secondary btn-sm'>Increment</button>
      </>
    )
  }
}

export default Counter;