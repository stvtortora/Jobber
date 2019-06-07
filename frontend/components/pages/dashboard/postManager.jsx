import React from 'react'
import ColumnTitles from './columnTitles'
import PostRows from './postRows'

export default ({ posts, deletePost, title, createPost, editPost, updateRoute }) => {
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
          <ColumnTitles fields={relevantFields}/>
          <PostRows
          fields={relevantFields}
          postIds={postIds}
          posts={posts}
          deletePost={deletePost}
          editPost={editPost}
          updateRoute={updateRoute}/>
        </div>
         :
        <div></div>
      }
      <div className='dashboard-create-container'>
        <button onClick={() => updateRoute(createPost)}>{`+ Add ${title}`}</button>
      </div>
    </div>
  )
}
