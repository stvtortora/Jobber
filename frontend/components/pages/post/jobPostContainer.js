import { connect } from 'react-redux'
import { fetchJobPost, searchJobPosts } from '../../../actions/jobPostsActions'
import { updateRoute } from '../../../actions/routeActions'
import { withRouter } from 'react-router'
import Post from './post'
import merge from 'lodash/merge'

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.history.location.pathname.slice(6)

  const post = state.records.jobPosts.info[postId] || {}

  const relatedPostIds = state.records.jobPosts.ids.filter((id) => id !== Number(postId))

  const relatedPosts = merge({}, state.records.jobPosts)

  relatedPosts.ids = relatedPostIds

  return {
    post,
    postId,
    postType: 'Job',
    overViewKeys: ['salary', 'career_level', 'industry', 'qualification', 'experience'],
    additionalInfo: post.job_type,
    buttonContent: { message:'Apply Now' },
    relatedPostsQuery: {
      limit: '5',
      order: 'created_at desc',
      offset: '1',
      job_category: post.job_category
    },
    relatedPosts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: (postId) => dispatch(fetchJobPost(postId)),
    fetchRelatedPosts: (query) => dispatch(searchJobPosts(query)),
    updateRoute: (newRoute) => dispatch(updateRoute(newRoute))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post))
