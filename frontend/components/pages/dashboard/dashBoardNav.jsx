import React from 'react'

export default ({ updateManager }) => {
  return (
    <div className='dashboard-nav'>
      <div onClick={() => updateManager('jobPost')} className='dashboard-nav-option'>Job Posts</div>
      <div onClick={() => updateManager('company')}className='dashboard-nav-option'>Companies</div>
    </div>
  )
}
