import React from 'react'
import PrimaryNavigation from './primaryNavigation'
import CreateNavigation from './createNavigation'
import UserNavigation from './userNavigation'
import { connect } from 'react-redux'
import { showOptions } from '../../actions/smallScreenNavActions'

class SmallScreenNav extends React.Component {
  render () {
    const { navigateTo, currentRoute, menuColor } = this.props
    return (
      <div className='small-screen-nav'>
        <div className='menu' id={`${menuColor}-menu`} onClick={(e) => {
          e.stopPropagation()
          this.props.showOptions()
        }}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {
          this.props.showNavOptions ?
          <div className='menu-options'>
            <PrimaryNavigation navigateTo={navigateTo} arrowColor='gray' klass='small-screen-primary'/>
            <CreateNavigation navigateTo={navigateTo} klass='small-screen-create'/>
            <UserNavigation navigateTo={navigateTo} faColor='gray' currentRoute={currentRoute} klass='small-screen-user'/>
          </div>
          :
          <div/>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    showNavOptions: state.smallScreenNav
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showOptions: () => dispatch(showOptions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmallScreenNav)
