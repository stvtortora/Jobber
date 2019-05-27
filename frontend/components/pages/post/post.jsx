import React from 'react'
import SideBar from './sideBar'
import MainPostContent from './MainPostContent'
import TitleHeader from '../../header/titleHeader'

class Post extends React.Component {
  componentDidMount() {
    if (this.props.relatedPostsQuery) {
      this.props.fetchRelatedPosts(this.props.relatedPostsQuery).then(() => {
        this.props.fetchPost(this.props.postId)
      })
    } else {
      this.props.fetchPost(this.props.postId)
    }
  }


  render() {
    const { postType, post, overViewKeys, additionalInfo, buttonContent, updateRoute, relatedPosts } = this.props

    if (post && post.description ) {
      return (
        <div className='post-page'>
          <TitleHeader message={post.title}/>
          <div className={`full-post-container ${postType}-container`}>
            <div className='full-post'>
              <MainPostContent
              post={post}
              postType={postType}
              additionalInfo={additionalInfo}
              relatedPosts={relatedPosts}
              updateRoute={updateRoute}
              />
              <SideBar
              post={post}
              postType={postType}
              overViewKeys={overViewKeys}
              buttonContent={buttonContent}
              updateRoute={updateRoute}
              />
            </div>
          </div>
        </div>
      )
    }

    return []
  }
}

export default Post
