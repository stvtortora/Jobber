import React from 'react'

export default ({ post, postType, additionalInfo }) => {
  const descriptionBox = () => {
    return (
      <section className='post-description-container'>
        <p className='post-description-title'>{`${postType} Description`}</p>
        <p className='post-description'>{post.description}</p>
      </section>
    )
  }

  const header = () => {
    return (
      <header className='post-header'>
        <p className='post-header-title'>{post.title}</p>
        <div className='header-second-line'>
          <p>{post.city}</p>
          <p>{additionalInfo}</p>
        </div>
        <div className='header-links'>
        <a className='header-link' href={post.website}>{post.website}</a>
          <a className='header-link' href={post.linked_in}>{post.linked_in}</a>
        </div>
      </header>
    )
  }

  return (
    <div className='main-post-content'>
      {header()}
      {descriptionBox()}
    </div>
  )
}
