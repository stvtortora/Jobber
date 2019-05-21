import React from 'react'

export default ({ updateManager, selected }) => {
  return (
    <div className='dashboard-nav'>
      <div onClick={() => updateManager('jobPost')} className='dashboard-nav-option' id={selected === 'Job Post' ? 'selected' : 'unselected'}><i class="fa fa-tasks" aria-hidden="true"></i> Job Posts</div>
      <div onClick={() => updateManager('company')} className='dashboard-nav-option' id={selected === 'Company' ? 'selected' : 'unselected'}><i class="fa fa-building-o" aria-hidden="true"></i> Companies</div>
    </div>
  )
}
