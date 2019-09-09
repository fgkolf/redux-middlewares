import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Page2 extends Component {

  componentDidMount () {
    const { bank } = this.props.params
    window.continueProcess(bank, 'coming from popup');
  }

  render() {
    return (<div>Here is the new Page2</div>)
  }
}

export default withRouter(Page2)
