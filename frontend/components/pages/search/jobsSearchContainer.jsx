import SearchContent from './searchContent'
import { connect } from 'react-redux'
import { searchJobPosts } from '../../../actions/jobPostsActions'
import { updateRoute } from '../../../actions/routeActions'

const mapStateToProps = state => {
  return {
    currentRoute: state.currentRoute,
    currentQuery: state.currentRoute.slice(5),
    isThisComponentsRoute: state.currentRoute.slice(0, 5) == '/jobs',
    searchResults: state.records.jobPosts,
    searchResultOptions: {
      stylingId: 'job-post-result',
      mainTitleKey: 'title',
      subTitleKey: 'company_title',
      buttonContentKey: 'job_type'
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    search: (query) => dispatch(searchJobPosts(query)),
    updateRoute: newRoute => dispatch(updateRoute(newRoute))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContent)
