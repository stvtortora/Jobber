import UpdatePostForm from './updatePostForm'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { fetchJobCategories } from '../../../actions/jobCategoriesActions'
import { fetchCompanies } from '../../../actions/companiesActions'
import { updateJobPost, fetchJobPost } from '../../../actions/jobPostsActions'
import { updateRoute } from '../../../actions/routeActions'

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.history.location.pathname.slice(12)
  return {
    postId,
    post: state.records.jobPosts.info[postId],
    newRecordKey: 'jobPost',
    redirectRoute: '/jobs/',
    formName: 'Job',
    formFields: {
      firstRow: ['city', 'company_id', 'job_category_id'],
      secondRow: ['job_type', 'salary', 'career_level'],
      thirdRow: ['qualification', 'experience', 'industry']
    },
    relatedRecords: {
      'job_category_id': state.records.jobCategories,
      'company_id': state.records.companies
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetch: (currentUser) => {
      return dispatch(fetchJobCategories()).then(() => {
        return dispatch(fetchCompanies(currentUser))
      })
    },
    loadPost: (jobPostId) => dispatch(fetchJobPost(jobPostId)),
    action: (job_post) => dispatch(updateJobPost(job_post)),
    updateRoute: (newRoute) => dispatch(updateRoute(newRoute))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdatePostForm))
