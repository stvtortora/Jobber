import React from 'react'

export default ({ postId, post, fields, deletePost, editPost, updateRoute }) => {
  const modifyButtons = () => (
    <div className='modify-buttons'>
      <div onClick={() => deletePost(post.id)} className='delete-button'>
        <i class="fa fa-trash" aria-hidden="true"></i> Delete
      </div>
      <div onClick={() => updateRoute(`${editPost}/${post.id}`)} className='update-button'>
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Update
      </div>
    </div>
  )

  return (
    <div key={postId} className='post-row'>
    {
      fields.map((field, i) => (
        <div key={field} className='manager-post-field'>
          <p>{post[field].split('_').join(' ')}</p>

          {
            i === 0 ?
            modifyButtons()
            :
            <div></div>
          }

        </div>
      ))
    }
    </div>
  )
}
