import PostForm from './postForm'
import { connect } from 'react-redux'
import { createCompany } from '../../../actions/companiesActions'

const mapStateToProps = state => {
  return {
    formFields: {
      firstRow: ['city', 'website', 'linked_in'],
      secondRow: ['twitter', 'phone_number', 'tagline'],
      thirdRow: ['team_size', 'industry']
    },
    relatedRecords: null,
    initialState: {
      'title': '',
      'city': '',
      'website': '',
      'linkedin': ''
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    create: (job_post) => dispatch(createCompany(job_post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
