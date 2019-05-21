import UpdatePostForm from './updatePostForm'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { updateCompany, fetchCompany } from '../../../actions/companiesActions'
import { updateRoute } from '../../../actions/routeActions'

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.history.location.pathname.slice(16)
  return {
    postId,
    post: state.records.companies.info[postId],
    redirectRoute: '/',
    formName: 'Company',
    formFields: {
      firstRow: ['city', 'website', 'linked_in'],
      secondRow: ['twitter', 'phone_number', 'facebook'],
      thirdRow: ['team_size', 'industry', 'tagline']
    },
    includeImageUpload: true,
    relatedRecords: null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    action: (company) => dispatch(updateCompany(company)),
    updateRoute: (newRoute) => dispatch(updateRoute(newRoute)),
    loadPost: (companyId) => dispatch(fetchCompany(companyId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdatePostForm))
