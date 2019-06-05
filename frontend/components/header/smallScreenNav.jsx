import React from 'react'
import PrimaryNavigation from './primaryNavigation'
import CreateNavigation from './createNavigation'
import UserNavigation from './userNavigation'
import { connect } from 'react-redux'
import { showOptions } from '../../actions/smallScreenNavActions'

const SmallScreenNav = ({ navigateTo, currentRoute, menuColor, showOptions, showNavOptions }) => {
  return (
    <div className='small-screen-nav'>
      <div className='menu' id={`${menuColor}-menu`} onClick={(e) => {
        e.stopPropagation()
        showOptions()
      }}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {
        showNavOptions ?
        <div className='menu-options-conatiner'>
          <div className='arrow-up'/>
          <div className='menu-options'>
            <PrimaryNavigation navigateTo={navigateTo} arrowColor='gray' klass='small-screen-primary'/>
            <CreateNavigation navigateTo={navigateTo} klass='small-screen-create'/>
            <UserNavigation navigateTo={navigateTo} faColor='gray' currentRoute={currentRoute} klass='small-screen-user'/>
          </div>
        </div>
        :
        <div/>
      }
    </div>
  )
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
