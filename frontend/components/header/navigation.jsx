import React from 'react'
import { withRouter } from 'react-router'

class Navigation extends React.Componet {
  constructor(props) {
    super(props)
    this.navigateTo = this.navigateTo.bind(this)
  }

  navigateTo (path) {
    this.props.history.push(path)
  }

  render () {
    <ul>
      <li onClick={'/'}>Home</li>
      <li>Jobs</li>
      <li>Companies</li>
      <li>About</li>
    </ul>
  }
}

export default withRouter(Navigation)
