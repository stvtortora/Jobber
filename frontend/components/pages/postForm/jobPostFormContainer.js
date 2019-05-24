import PostForm from './postForm'
import { connect } from 'react-redux'
import { fetchJobCategories } from '../../../actions/jobCategoriesActions'
import { fetchCompanies } from '../../../actions/companiesActions'
import { createJobPost } from '../../../actions/jobPostsActions'
import { updateRoute } from '../../../actions/routeActions'

const mapStateToProps = state => {
  return {
    currentUser: state.session.id,
    newRecordKey: 'jobPost',
    redirectRoute: '/jobs/',
    formName: 'Job Post',
    formFields: {
      firstRow: ['city', 'company_id', 'job_category_id'],
      secondRow: ['job_type', 'salary', 'career_level'],
      thirdRow: ['qualification', 'experience', 'industry']
    },
    relatedRecords: {
      'job_category_id': state.records.jobCategories,
      'company_id': state.records.companies
    },
    initialState: {
      'title': '',
      'city': '',
      'job_type': '',
      'job_category_id': ''
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
    action: (job_post) => dispatch(createJobPost(job_post)),
    updateRoute: (newRoute) => dispatch(updateRoute(newRoute))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
