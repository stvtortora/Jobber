import React from 'react'
import Navigation from './navigation'
import HeaderContent from './headerContent'

export default ({ scrollRef }) => {
  return (
    <div className='header'>
      <Navigation/>
      <HeaderContent scrollRef={scrollRef}/>
    </div>

  )
}
// <JobSearch/>
