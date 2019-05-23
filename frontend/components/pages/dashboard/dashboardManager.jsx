import React from 'react'

export default ({ posts, del, title, createRoute, editRoute, updateRoute }) => {
  const managerColumns = () => {
    return (
      <div className='manager-columns'>
        {
          relevantFields.map(field => {
            return <div className='manager-column'>{field.split('_').join(' ')}</div>
          })
        }
      </div>
    )
  }

  const postRows = () => {
    return (
      <div className='manager-posts'>
        {
          postIds.map(postId => {
            const post = posts[postId]
            return (
              <div className='post-row'>
              {
                relevantFields.map((field, i) => {
                  return (
                    <div className='manager-post-field'>
                      <p>{post[field].split('_').join(' ')}</p>
                      {
                        i === 0 ?
                        <div className='modify-buttons'>
                          <div onClick={() => del(post.id)} className='delete-button'>
                            <i class="fa fa-trash" aria-hidden="true"></i> Delete
                          </div>
                          <div onClick={() => updateRoute(`${editRoute}/${post.id}`)} className='update-button'>
                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Update
                          </div>
                        </div>
                        :
                        <div></div>
                      }
                    </div>
                  )
                })
              }
              </div>
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
  }

  return (
    <div className='dashboard-manager'>
      <p className='dashboard-manager-prompt'>Your post can be modified below.</p>
      {
        postIds.length ?
        <div className='dashboard-table'>
          {managerColumns()}
          {postRows()}
        </div>
         :
        <div></div>
      }
      <div className='dashboard-create-container'>
        <button onClick={() => updateRoute(createRoute)}>{`+ Add ${title}`}</button>
      </div>
    </div>
  )
}
