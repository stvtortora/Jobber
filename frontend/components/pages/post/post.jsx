import React from 'react'
import SideBar from './sideBar'
import MainPostContent from './mainPostContent'
import TitleHeader from '../../header/titleHeader'
import Loader from '../../loader/loader'
import NotFound from '../404Page/404Page'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contentLoaded: false
    }
    this.fetchPageContent = this.fetchPageContent.bind(this)
    this.fetchPost = this.fetchPost.bind(this)
  }

  componentDidMount() {
    this.fetchPageContent()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.postId !== this.props.postId) {
      this.setState({ contentLoaded: false })
      this.fetchPageContent()
    }
  }

  fetchPageContent () {
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

    return <Loader/>
  }
}

export default Post
