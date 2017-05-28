import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.count = 0
  }

  handleAdd() {
    this.props.increment()
  }

  handleSubtract() {
    this.props.decrement()
  }
  
  render() {
    return (
      <div>
        <div onClick={this.handleAdd.bind(this)}>ADD +</div>
        <div onClick={this.handleSubtract.bind(this)}>SUBTRACT -</div>
        <div>{this.props.count}</div>
      </div>
    )
  }

}

export default Counter