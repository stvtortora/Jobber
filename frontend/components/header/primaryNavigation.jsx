import React from 'react'

export default ({ navigateTo, arrowColor }) => {
  return (
    <ul>
      <li onClick={() => navigateTo('/')}><p>Home<i className="arrow-down" id={`${arrowColor}-arrow`}></i></p></li>
      <li onClick={() => navigateTo('/jobs')}><p>Jobs<i className="arrow-down" id={`${arrowColor}-arrow`}></i></p></li>
      <li><p>Companies<i className="arrow-down" id={`${arrowColor}-arrow`}></i></p></li>
      <li><p>About<i className="arrow-down" id={`${arrowColor}-arrow`}></i></p></li>
    </ul>
  )
}
