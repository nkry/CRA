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
    const assetPath = this.props.assets

    return (
      <div>
        <div>Everything is working</div>
        <img src={assetPath + 'test.jpg'} />
      </div>
    )
  }

}

export default Main;