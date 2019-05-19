import React from 'react'

export default ({ post, postType, additionalInfo }) => {
  const description = () => {
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
        <h3 className='post-header-title'>{post.title}</h3>
        <div className='header-second-line'>
          <p><i className="fa fa-map-marker" aria-hidden="true"></i> {post.city}</p>
          <p>{additionalInfo}</p>
        </div>
        <div className='header-links'>
          <a className='header-link' href={post.website}><i class="fa fa-link" aria-hidden="true"></i> {post.website}</a>
          <a className='header-link' href={post.linked_in}><i class="fa fa-linkedin-square" aria-hidden="true"></i> {post.linked_in}</a>
        </div>
      </header>
    )
  }

  return (
    <div className='main-post-content'>
      {header()}
      {description()}
    </div>
  )
}
