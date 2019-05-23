import React from 'react'

export default ({ title, subtitle, id }) => {
  return (
    <div id={id} className='section-header'>
      <h3>{title}</h3>
      <span>{subtitle}</span>
    </div>
  )
}
