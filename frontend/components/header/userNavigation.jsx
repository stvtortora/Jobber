import React from 'react'

export default ({ navigateTo, faColor }) => {
  return (
    <ul className='user-navigation'>
      <li><p><i id={`${faColor}-fa-image`} className="fa fa-user fa-img" aria-hidden="true"></i>User Page</p></li>
      <li><p><i id={`${faColor}-fa-image`} className="fa fa-sign-out fa-img" aria-hidden="true"></i>Log Out</p></li>
    </ul>
  )
}
