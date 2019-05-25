import React from 'react'
import Navigation from './navigation'
import HeaderContent from './headerContent'

export default ({ landingScrollRef, redirectScrollRef }) => {
  return (
    <div className='header'>
      <Navigation redirectScrollRef={redirectScrollRef}/>
      <HeaderContent landingScrollRef={landingScrollRef}/>
    </div>

  )
}
// <JobSearch/>
