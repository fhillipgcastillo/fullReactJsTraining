import React, { Component } from 'react';
import PropTypes from 'prop-types';

class _MainViews extends Component {
  static propTypes = { initialData:PropTypes.object.isRequired};
  state = this.props.initialData;
  componentDidMount(){
    onPopState( e => {
      this.setState(this.props.setDidMountStates);
    });
  };
  componentWillUnmount(){
    onPopState(null);
  };
  currentContent(cb){
    cb()
  };
  render(){
    return <h2>Component</h1>
  };s
};

export default _MainViews;
