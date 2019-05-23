import React from 'react'

export default ({ scrollRef }) => {
  const scrollToContent = () => window.scrollTo({
    top: scrollRef.current.offsetTop, behavior: 'smooth'
  })

  return (
    <div className='scroll-button-container' onClick={scrollToContent}>
      <div className='scroll-button'>
        <i class="fa fa-arrow-down" aria-hidden="true"></i>
      </div>
    </div>
  )
}
