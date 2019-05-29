import { connect } from 'react-redux'
import { fetchCompany } from '../../../actions/companiesActions'
import { updateRoute } from '../../../actions/routeActions'
import { withRouter } from 'react-router'
import Post from './post'

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.history.location.pathname.slice(11)

  const post = state.records.companies.info[postId] || {}

  return {
    post,
    postId,
    postType: 'Company',
    overViewKeys: ['salary', 'career_level', 'industry', 'qualification', 'experience'],
    additionalInfo: post.industry,
    buttonContent: {
      message: `View ${post.job_posts} open positions`,
      redirectRoute: `/jobs/?limit=10&order=created_at:desc&offset=1&keyword=${post.title}`
    },
    relatedPosts: null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: (postId) => dispatch(fetchCompany(postId)),
    updateRoute: (newRoute) => dispatch(updateRoute(newRoute))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post))
