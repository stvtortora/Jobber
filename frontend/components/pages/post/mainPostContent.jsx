import React from 'react'
import SearchResults from '../search/searchResults'


export default class MainPostContent extends React.Component {
  constructor(props) {
    super(props)
    this.description = this.description.bind(this)
    this.header = this.header.bind(this)
    this.relatedPosts = this.relatedPosts.bind(this)
  }

  componentDidMount() {
    document.getElementById('post-description').innerHTML = JSON.parse(this.props.post.description).html
  }

  header() {
    const { post, additionalInfo } = this.props
    return (
      <header className='post-header'>
        <img src={post.picture_url}/>
        <div>
          <h3 className='post-header-title'>{post.company ? post.company : post.title}</h3>
          <div className='header-second-line header-line'>
            <p><i className="fa fa-map-marker" aria-hidden="true"></i> {post.city}</p>
            <p>{additionalInfo}</p>
          </div>
          <div className='header-links header-line'>
            <a className='header-link' href={`https://www.${post.website}`}><i class="fa fa-link" aria-hidden="true"></i> {post.website}</a>
            <a className='header-link' href={`https://www.${post.linked_in}`}><i class="fa fa-linkedin-square" aria-hidden="true"></i> {post.linked_in}</a>
          </div>
        </div>
      </header>
    )
  }

  description() {
    const { postType, post } = this.props
    return (
      <section className='post-description-container'>
        <div id='post-description' className='post-description'></div>
      </section>
    )
  }

  relatedPosts() {
    const { relatedPosts, updateRoute } = this.props

    if (this.props.relatedPosts) {
      return (
        <div className='related-posts'>
          <h3>Related Jobs</h3>
          <SearchResults
          searchResults={relatedPosts}
          searchResultOptions={{
            stylingId: 'job-post-result',
            mainTitleKey: 'title',
            subTitleKey: 'company',
            buttonContentKey: 'job_type'
          }}
          updateRoute={updateRoute}
          routePrefix={'/jobs'}
          />
        </div>
      )
    }

    return null
  }

  render() {
    const { relatedPosts, updateRoute } = this.props
    return (
      <div className='main-post-content'>
        {this.header()}
        {this.description()}
        {this.relatedPosts()}
      </div>
    )
  }
}
