import React, { Component } from 'react'
import { continueProcessAction } from '../actions/actions'
import { connect } from 'react-redux'

class Page2 extends Component {

  componentDidMount () {
    window.continueProcess('coming from popup');
  }

  render() {
    return (<div>Here is the new Page2</div>)
  }
}

const mapDispatchToProps = dispatch => ({
  continueProcess: () => {
    dispatch(continueProcessAction());
  }
});

export default connect(null, mapDispatchToProps)(Page2);
