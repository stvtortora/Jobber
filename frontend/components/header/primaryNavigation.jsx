import React from 'react'

export default ({ navigateTo, arrowColor }) => {
  return (
    <ul>
      <li onClick={() => navigateTo('/')}><p id={`${arrowColor}-nav-option`}>Home<i className="arrow-down" id={`${arrowColor}-arrow`}></i></p></li>
      <li onClick={() => navigateTo('/jobs/?limit=10&offset=1&order=created_at:desc')}><p id={`${arrowColor}-nav-option`}>Jobs<i className="arrow-down" id={`${arrowColor}-arrow`}></i></p></li>
      <li><p id={`${arrowColor}-nav-option`}>Companies<i className="arrow-down" id={`${arrowColor}-arrow`}></i></p></li>
      <li><p id={`${arrowColor}-nav-option`}>About<i className="arrow-down" id={`${arrowColor}-arrow`}></i></p></li>
    </ul>
  )
}
