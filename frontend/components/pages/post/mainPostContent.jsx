import React from 'react'

export default class MainPostContent extends React.Component {
  constructor(props) {
    super(props)
    this.description = this.description.bind(this)
    this.header = this.header.bind(this)
  }

  componentDidMount() {
    document.getElementById('post-description').innerHTML = this.props.post.description
  }

  description() {
    const { postType, post } = this.props
    return (
      <section className='post-description-container'>

        <div id='post-description' className='post-description'></div>
      </section>
    )
  }


  header() {
    const { post, additionalInfo } = this.props
    return (
      <header className='post-header'>
        <img src={post.picture_url}/>
        <div>
          <h3 className='post-header-title'>{post.title}</h3>
          <div className='header-second-line header-line'>
            <p><i className="fa fa-map-marker" aria-hidden="true"></i> {post.city}</p>
            <p>{additionalInfo}</p>
          </div>
          <div className='header-links header-line'>
            <a className='header-link' href={post.website}><i class="fa fa-link" aria-hidden="true"></i> {post.website}</a>
            <a className='header-link' href={post.linked_in}><i class="fa fa-linkedin-square" aria-hidden="true"></i> {post.linked_in}</a>
          </div>
        </div>
      </header>
    )
  }



  render() {
    return (
      <div className='main-post-content'>
        {this.header()}
        {this.description()}
      </div>
    )
  }
}
