import { connect } from 'react-redux'
import { fetchJobPost } from '../../../actions/jobPostsActions'
import { withRouter } from 'react-router'
import Post from './post'

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.history.location.pathname.slice(6)

  const post = state.records.jobPosts.info[postId] || {}
  console.log(state, 's')
  console.log(postId, 'id')
  console.log(post, 'p')
  return {
    post,
    postId,
    postType: 'Job',
    overViewKeys: ['salary', 'career_level', 'industry', 'qualification', 'experience'],
    additionalInfo: post.job_type
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: (postId) => dispatch(fetchJobPost(postId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post))
