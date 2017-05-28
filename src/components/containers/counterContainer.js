import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import Counter from './counter';

const mapStateToProps = function(state, prop) {
  return {
    count: state.countReducer.count
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    action: bindActionCreators(actions, dispatch)
  }
}

class Container extends Component {
  constructor(props) {
    super(props)
  } 

  render() {
    return (
      <Counter increment={this.props.action.increment} decrement={this.props.action.decrement} count={this.props.count} />
    )
  }
}

const ComponentContainer = connect(mapStateToProps, mapDispatchToProps)(Container)

export default ComponentContainer;

