import React from 'react'
import PostHeader from './postHeader'
import MainPostContent from './MainPostContent'

class Post extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.postId)
  }

  render() {
    const { postType, post, overViewKeys, additionalInfo } = this.props

    if (post.description) {
      return (
        <div className='full-post'>
        <PostHeader
        postType={postType}
        website={post}
        linked_in={post.linked_in}
        city={post.city}
        title={post.title}
        additionalInfo={additionalInfo}
        />
        <MainPostContent
        post={post}
        postType={postType}
        overViewKeys={overViewKeys}
        description={post.description}
        />
        </div>
      )
    }

    return []
  }
}
