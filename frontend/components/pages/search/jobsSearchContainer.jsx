import Search from './search'
import { connect } from 'react-redux'
import { searchJobPosts } from '../../../actions/jobPostsActions'

const mapStateToProps = state => {


  return {
    path: state.currentRoute,

  }
}

const mapDispatchToProps = dispatch => {
  return {
    search: (query) => dispatch(searchJobPosts(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
