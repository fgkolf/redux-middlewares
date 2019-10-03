import React, { Component } from 'react'
import { continueProcessAction, openWindowAction } from '../actions/actions'
import { connect } from 'react-redux'

class Page1 extends Component {
  constructor(props) {
    super(props)
    this.openWindowCallback = this.openWindowCallback.bind(this)
  }

  openWindowCallback(url) {
    const newWindow = window.open('', '_blank', 'width=600,height=400,left=200,top=200')
    newWindow.location.replace(url);
    newWindow.continueProcess = this.props.continueProcess;
    newWindow.onbeforeunload = this.props.terminateProcess;
    console.log('HERE IS THE NEW WINDOW', newWindow);
    return newWindow;
  }

  render()
  {
    return (<div className="main">
      <button
        onClick={() => this.props.openWindow(this.openWindowCallback)}
        disabled={this.props.isProcessing}
      >
        click me
      </button>
    </div>)
  }
}

const mapStateToProps = (state, { bank }) => ({
  isProcessing: state.movie[bank] && state.movie[bank].isFetching
});

const mapDispatchToProps = (dispatch, { bank }) => ({
  openWindow: (openWindowCallback) => {
    dispatch(openWindowAction(openWindowCallback, bank));
  },
  continueProcess: (bank, data) => {
    dispatch(continueProcessAction(bank, data));
  },
  terminateProcess: () => {
    dispatch({ type: `${bank}_closed` });
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Page1)
