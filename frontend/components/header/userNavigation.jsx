import React from 'react'
import { logout } from '../../actions/sessionActions'
import { connect } from 'react-redux'

const UserNavigation = ({ navigateTo, faColor, currentUser, currentRoute, logout, klass }) => {
  const logOutAndRedirect = () => {
    logout(currentUser).then(() => {
      if (currentRoute !== '/') {
        navigateTo('/login')
      }
    })
  }

  if (currentUser) {
    return (
      <ul className={`${klass}`}>
        <li><p id={`${faColor}-nav-option`} onClick={() => navigateTo('/user-dashboard')}><i id={`${faColor}-fa-image`} className="fa fa-user fa-img" aria-hidden="true"></i>User Page</p></li>
        <li onClick={logOutAndRedirect}><p id={`${faColor}-nav-option`}><i id={`${faColor}-fa-image`} className="fa fa-sign-out fa-img" aria-hidden="true"></i>Log Out</p></li>
      </ul>
    )
  }

  return (
    <ul className={`${klass}`}>
      <li><p id={`${faColor}-nav-option`} onClick={() => navigateTo('/login')}><i id={`${faColor}-fa-image`} className="fa fa-sign-out fa-img" aria-hidden="true"></i>Log In</p></li>
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
