import React from 'react'
import SideBar from './sideBar'
import MainPostContent from './MainPostContent'

class Post extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.postId)
  }

  render() {
    const { postType, post, overViewKeys, additionalInfo } = this.props

    if (post && post.description) {
      console.log(post, 'post')
      return (
        <div className='full-post-container'>
          <div className='full-post'>
            <MainPostContent
            post={post}
            postType={postType}
            additionalInfo={additionalInfo}
            />
            <SideBar
            post={post}
            postType={postType}
            overViewKeys={overViewKeys}
            />
          </div>
        </div>
      )
    }

    return []
  }
}

export default Post
