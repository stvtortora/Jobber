import React from 'react'
import { logout } from '../../actions/sessionActions'
import { connect } from 'react-redux'

const UserNavigation = ({ navigateTo, faColor, currentUser, currentRoute, logout }) => {
  const logOutAndRedirect = () => {
    logout(currentUser).then(() => {
      if (currentRoute !== '/') {
        navigateTo('/')
      }
    })
  }

  if (currentUser) {
    return (
      <ul className='user-navigation'>
      <li><p><i id={`${faColor}-fa-image`} className="fa fa-user fa-img" aria-hidden="true"></i>User Page</p></li>
      <li onClick={logOutAndRedirect}><p><i id={`${faColor}-fa-image`} className="fa fa-sign-out fa-img" aria-hidden="true"></i>Log Out</p></li>
      </ul>
    )
  }

  return (
    <ul className='user-navigation'>
      <li><p onClick={() => navigateTo('/login')}><i id={`${faColor}-fa-image`} className="fa fa-sign-out fa-img" aria-hidden="true"></i>Log In</p></li>
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: (currentUser) => dispatch(logout(currentUser)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNavigation)
