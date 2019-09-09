import React, { Component } from 'react'
import { continueProcessAction, openWindowAction } from '../actions/actions'
import { connect } from 'react-redux'

class Page1 extends Component {
  constructor(props) {
    super(props)
    this.openWindowCallback = this.openWindowCallback.bind(this)
  }

  openWindowCallback(url) {
    this.newWindow = window.open(url, 'blank', 'width=600,height=400,left=200,top=200')
    this.newWindow.continueProcess = this.props.continueProcess;
    return this.newWindow;
  }

  render()
  {
    return (<div className="main">
      <button onClick={() => this.props.openWindow(this.openWindowCallback)}>click me</button>
    </div>)
  }
}

const mapDispatchToProps = dispatch => ({
  openWindow: (openWindowCallback) => {
    dispatch(openWindowAction(openWindowCallback));
  },
  continueProcess: (data) => {
    dispatch(continueProcessAction(data));
  }
})

export default connect(null, mapDispatchToProps)(Page1)
