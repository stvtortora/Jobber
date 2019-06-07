import React from 'react'

export default ({ updatePostManager, selected }) => {
  return (
    <div className='dashboard-nav'>
      <div onClick={() => updatePostManager('jobPost')} className='dashboard-nav-option' id={selected === 'Job Post' ? 'selected' : 'unselected'}><i class="fa fa-tasks" aria-hidden="true"></i> Job Posts</div>
      <div onClick={() => updatePostManager('company')} className='dashboard-nav-option' id={selected === 'Company' ? 'selected' : 'unselected'}><i class="fa fa-building-o" aria-hidden="true"></i> Companies</div>
    </div>
  )
}
