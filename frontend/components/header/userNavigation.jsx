import React from 'react'

export default ({ navigateTo }) => {
  return (
    <ul className='user-navigation'>
      <li><p><i id='fa-image' className="fa fa-user" aria-hidden="true"></i>User Page</p></li>
      <li><p><i id='fa-image' className="fa fa-sign-out" aria-hidden="true"></i>Log Out</p></li>
    </ul>
  )
}
