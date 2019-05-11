import React from 'react'
import Logo from './logo'
import PrimaryNavigation from './primaryNavigation'
import CreateNavigation from './createNavigation'
import UserNavigation from './userNavigation'
import { withRouter } from 'react-router'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.navigateTo = this.navigateTo.bind(this)
  }

  navigateTo (path) {
    this.props.history.push(path)
  }

  render () {
    return (
      <div className='top-bar'>
        <Logo/>
        <PrimaryNavigation navigateTo={this.navigateTo}/>
        <CreateNavigation navigateTo={this.navigateTo}/>
        <UserNavigation navigateTo={this.navigateTo}/>
      </div>
    )
  }
}

export default withRouter(Navigation)
