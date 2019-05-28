import React from 'react'

export default ({ navigateTo, klass }) => {
  return (
    <div className={`${klass}`}>
      <div onClick={() => navigateTo('/post-a-job')}><p>+ Post a Job</p></div>
      <div onClick={() => navigateTo('/post-a-company')}><p>+ Post a Company</p></div>
    </div>
  )
}
