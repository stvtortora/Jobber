import SearchPage from './searchPage'
import { connect } from 'react-redux'
import { searchJobPosts } from '../../../actions/jobPostsActions'
import { updateRoute } from '../../../actions/routeActions'
import { parseQuery } from '../../../util/queryUtil'

const mapStateToProps = state => {
  const currentQuery = state.currentRoute.slice(5)
  return {
    currentQuery,
    routePrefix: '/jobs',
    currentRoute: state.currentRoute,
    isThisComponentsRoute: state.currentRoute.slice(0, 7) == '/jobs/?',
    searchResults: state.records.jobPosts,
    searchSpecifications: parseQuery(currentQuery),
    filterTypes: ['job_type', 'job_category'],
    searchResultOptions: {
      stylingId: 'job-post-result',
      mainTitleKey: 'title',
      subTitleKey: 'company',
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
