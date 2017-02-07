import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    console.log("component mounted")
  }

  render() {
    return (
      <div>Everything is working</div>
    )
  }

}

export default Main;