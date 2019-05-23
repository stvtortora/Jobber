import React from 'react'

export default ({ updateRoute}) => {
  return (
    <section className='sign-up-prompt'>
      <div>
        <h2>Looking for great talent?</h2>
        <p>Post a job in minutes!</p>
        <button onClick={() => updateRoute('/login')}>Create an Account</button>
      </div>
    </section>
  )
}
