import { connect } from 'react-redux'
import { fetchJobPost } from '../../../actions/jobPostsActions'
import PostPage from './postPage'

const mapStateToProps = (state) => {
  const postId = state.currentRoute.slice(5)
  const post = state.jobPosts.content[ownProps.postId]
  
  return {
    post,
    postType: 'Job',
    overViewKeys: ['salary', 'career_level', 'industry', 'qualification', 'language', 'job_type', 'experience', 'job_category', 'company'],
    additionalInfo: post.job_type
  }
}

const mapDispatchToProps = dispatch => {
  return fetchPost: (postId) => dispatch(fetchJobPost(postId))
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
