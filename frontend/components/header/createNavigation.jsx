import React from 'react'

export default ({ navigateTo }) => {
  return (
    <div className='create-navigation'>
      <div onClick={() => navigateTo('/post-a-job')}><p>+ Post a Job</p></div>
      <div onClick={() => navigateTo('/post-a-company')}><p>+ Post a Company</p></div>
    </div>
  )
}
