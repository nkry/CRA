import React, { Component } from 'react'
import CounterContainer from './containers/counterContainer'

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
    const assetPath = this.props.route.assets

    return (
      <div>
        <CounterContainer />
        <img src={assetPath + 'test.jpg'} />
      </div>
    )
  }
}

export default Main