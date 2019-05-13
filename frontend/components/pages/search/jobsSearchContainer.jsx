import SearchContent from './searchContent'
import { connect } from 'react-redux'
import { searchJobPosts } from '../../../actions/jobPostsActions'

const mapStateToProps = state => {
console.log(state.currentRoute)

  return {
    currentRoute: state.currentRoute,
    isThisComponentsRoute: state.currentRoute.slice(0, 5) === '/jobs',
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
    search: (query) => dispatch(searchJobPosts(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContent)
