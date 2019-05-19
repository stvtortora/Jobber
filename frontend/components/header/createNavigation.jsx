import React from 'react'

export default ({ navigateTo }) => {
  return (
    <div className='create-navigation'>
      <div onClick={() => navigateTo('/post-a-job')}><p>+ Post a Job</p></div>
      <div><p>+ Post a Company</p></div>
    </div>
  )
}
