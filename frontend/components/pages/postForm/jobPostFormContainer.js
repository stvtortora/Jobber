import PostForm from './postForm'
import { connect } from 'react-redux'
import { fetchJobCategories } from '../../../actions/jobCategoriesActions'
import { createJobPost } from '../../../actions/jobPostsActions'

const mapStateToProps = state => {
  return {
    formFields: {
      firstRow: ['city', 'job_type', 'job_category_id'],
      secondRow: ['salary', 'career_level', 'industry'],
      thirdRow: ['qualification', 'experience', 'language']
    },
    relatedRecords: state.records.jobCategories,
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
    fetch: () => dispatch(fetchJobCategories()),
    create: (job_post) => dispatch(createJobPost(job_post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
