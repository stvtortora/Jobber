import React from 'react'

export default ({ title, subtitle }) => {
  return (
    <div className='section-header'>
      <h3>{title}</h3>
      <span>{subtitle}</span>
    </div>
  )
}
