import React from 'react'

export default = ({ postType, website, linked_in, city, title, additionalInfo }) => {
  return (
    <header className='post-header'>
      <p className='post-header-title'>{post.title}</p>
      <div className='header-second-line'>
        <p>{city}</p>
        <p>{additionalInfo}
      </div>
      <div className='header-links'>
      <a className='header-link' href={website}>{website}</a>
        <a className='header-link' href={linked_in}>{linked_in}</a>
      </div>
    </header>
  )
}
