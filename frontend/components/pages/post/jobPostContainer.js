import { connect } from 'react-redux'
import { fetchJobPost } from '../../../actions/jobPostsActions'
import Post from './post'

const mapStateToProps = (state) => {
  const postId = state.currentRoute.slice(6)
  
  const post = state.records.jobPosts.info[postId]

  return {
    post,
    postId,
    postType: 'Job',
    overViewKeys: ['salary', 'career_level', 'industry', 'qualification', 'language', 'experience'],
    additionalInfo: post.job_type
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: (postId) => dispatch(fetchJobPost(postId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
