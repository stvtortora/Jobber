import React from 'react'
import SideBar from './sideBar'
import MainPostContent from './mainPostContent'
import TitleHeader from '../../header/titleHeader'
import NotFound from '../404Page/404Page'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contentLoaded: false
    }
    this.fetchData = this.fetchData.bind(this)
    this.fetchPost = this.fetchPost.bind(this)
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.postId !== this.props.postId) {
      this.fetchData()
    }
  }

  fetchData () {
    if (this.props.relatedPostsQuery) {
      this.props.fetchRelatedPosts(this.props.relatedPostsQuery).then(() => {
        this.fetchPost(this.props.postId)
      })
    } else {
      this.fetchPost(this.props.postId)
    }
  }

  fetchPost () {
    this.props.fetchPost(this.props.postId).then(() => {
      this.setState({
        contentLoaded: true
      })
    })
  }

  render() {
    const { postType, post, overViewKeys, additionalInfo, buttonContent, updateRoute, relatedPosts } = this.props

    if (this.state.contentLoaded) {
      if (post && post.description) {
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

      return <NotFound/>
    }

    return []
  }
}

export default Post
