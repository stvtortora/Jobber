import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { updateRoute } from '../actions/routeActions'
import Header from './header/header'
import JobPostsSearch from './pages/search/jobPostsSearchContainer'
import JobPost from './pages/post/jobPostContainer'
import JobPostForm from './pages/postForm/jobPostForm'
import SessionPage from './pages/session/sessionPage'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    const { pathname, search } = this.props.history.location
    this.props.updateRoute(pathname + search)
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.currentRoute !== this.props.currentRoute) {
      this.props.history.push(this.props.currentRoute)
    }
    const { pathname, search } = this.props.history.location
    const { prevPathname, prevSearch } = prevProps.history.location
    if (prevPathname !== pathname && prevSearch !== search) {
      this.props.updateRoute(pathname + search)
    }
  }

  render() {
    return (
      <content className='all-content'>
          <Header/>
          <Switch>
            <Route path='/login' exact component={SessionPage} />
            <Route path='/jobs/:postId' exact component={JobPost} />
            <Route path='/jobs' component={JobPostsSearch} />
            <Route path='/post-a-job' component={JobPostForm} />
          </Switch>
          <div className='under-header'></div>
      </content>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentRoute: state.currentRoute
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateRoute: newRoute => dispatch(updateRoute(newRoute))
  }
}
// <Route path='/' exact component={PlaceBuyOrderForm} />

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
