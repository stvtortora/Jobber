import PostForm from './postForm'
import { connect } from 'react-redux'
import { createCompany } from '../../../actions/companiesActions'
import { updateRoute } from '../../../actions/routeActions'

const mapStateToProps = state => {
  return {
    currentUser: state.session.id,
    redirectRoute: '/',
    formName: 'Company',
    formFields: {
      firstRow: ['city', 'website', 'linked_in'],
      secondRow: ['twitter', 'phone_number', 'facebook'],
      thirdRow: ['team_size', 'industry', 'tagline']
    },
    includeImageUpload: true,
    relatedRecords: null,
    initialState: {
      'title': '',
      'city': '',
      'website': '',
      'linked_in': '',
      'facebook': ''
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    action: (job_post) => dispatch(createCompany(job_post)),
    updateRoute: (newRoute) => dispatch(updateRoute(newRoute))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
