import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { updateRoute } from '../actions/routeActions'
import Header from './header/header'
import JobPostsSearch from './pages/search/jobPostsSearchContainer'
import JobPost from './pages/post/jobPostContainer'
import JobPostForm from './pages/postForm/jobPostFormContainer'
import CompanyPostForm from './pages/postForm/companyPostFormContainer'
import SessionPage from './pages/session/sessionPage'
import Dashboard from './pages/dashboard/dashboard'
import UpdateJobPostForm from './pages/postForm/updateJobPostContainer'
import UpdateCompanyForm from './pages/postForm/updateCompanyContainer'

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
            <Route path='/user-dashboard' exact component={Dashboard} />
            <Route path='/login' exact component={SessionPage} />
            <Route path='/jobs/:postId' exact component={JobPost} />
            <Route path='/jobs' component={JobPostsSearch} />
            <Route path='/edit-a-job/:postId' component={UpdateJobPostForm}/>
            <Route path='/edit-a-company/:postId' component={UpdateCompanyForm}/>
            <Route path='/post-a-job' component={JobPostForm} />
            <Route path='/post-a-company' component={CompanyPostForm} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
