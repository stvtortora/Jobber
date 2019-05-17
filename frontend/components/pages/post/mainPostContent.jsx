import React from 'react'

export default = ({ post, postType, overViewKeys, description }) => {
  const description = () => {
    return (
      <section className='post-description-container'>
        <p className='post-description-title'>{`${postType} Description`}</p>
        <p className='post-description'>{description}</p>
      </section>
    )
  }

  const infoBar = () => {
    return (
      <section className='info-bar-container'>
        <p className='info-bar-title'>{`${postType} Information`}</p>
        {
          overViewKeys.map(key => {
            return (
              <li key={key} className='info-bar-item'>
                <p className='info-type'>{key}</p>
                <p className='info-value'>{post[key]}</p>
              </li>
            )
          })
        }
      </section>
    )
  }

  return (
    <div className='main-post-content'>
      {description()}
      {infoBar()}
    </div>
  )
}
