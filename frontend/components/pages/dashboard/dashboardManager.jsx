import React from 'react'

export default ({ posts, del }) => {
  const managerColumns = () => {
    return (
      <span className='manager-columns'>
        {
          relevantFields.map(field => {
            return <div className='manager-column'>{field}</div>
          })
        }
      </span>
    )
  }

  const postRows = () => {
    return (
      <div className='manager-posts'>
        {
          postIds.map(postId => {
            const post = posts[postId]
            return (
              <span className='post-row'>
              {
                relevantFields.map(field => {
                  return (
                    <div className='manager-post-field'>{post[field].split('_').join(' ')}</div>
                  )
                })
              }
              </span>
            )
          })
        }
      </div>
    )
  }

  const postIds = Object.keys(posts)
  let relevantFields

  if (postIds.length) {
    relevantFields = [
      'title', 'city', 'company',
      'website', 'phone_number', 'job_type'
    ].filter(field => {
      return posts[postIds[0]][field]
    })

    return (
      <div className='dashboard-manager'>
        {managerColumns()}
        {postRows()}
      </div>
    )
  }

  return []
}
