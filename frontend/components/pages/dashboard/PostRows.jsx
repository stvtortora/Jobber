import React from 'react'
import PostRow from './postRow'

export default ({ posts, deletePost, editPost, postIds, fields, updateRoute }) => {
  return (
    <div className='manager-posts'>
      {
        postIds.map(postId => {
          return (
            <PostRow
            postId={postId}
            post={posts[postId]}
            fields={fields}
            deletePost={deletePost}
            editPost={editPost}
            updateRoute={updateRoute}
            />
          )
        })
      }
    </div>
  )
}
