import React from 'react'

export default ({ navigateTo }) => {
  return (
    <ul>
      <li onClick={() => navigateTo('/')}><p>Home<i className="arrow-down"></i></p></li>
      <li><p>Jobs<i className="arrow-down"></i></p></li>
      <li><p>Companies<i className="arrow-down"></i></p></li>
      <li><p>About<i className="arrow-down"></i></p></li>
    </ul>
  )
}
