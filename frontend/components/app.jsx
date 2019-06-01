import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { updateRoute } from '../actions/routeActions'
import { hideOptions } from '../actions/smallScreenNavActions'
import Header from './header/header'
import Home from './pages/home/home'
import JobPostsSearch from './pages/search/jobPostsSearchContainer'
import JobPost from './pages/post/jobPostContainer'
import CompanyPost from './pages/post/companyPostContainer'
import CompaniesSearch from './pages/search/companiesSearchContainer'
import JobPostForm from './pages/postForm/jobPostFormContainer'
import CompanyPostForm from './pages/postForm/companyPostFormContainer'
import SessionPage from './pages/session/sessionPage'
import Dashboard from './pages/dashboard/dashboard'
import UpdateJobPostForm from './pages/postForm/updateJobPostContainer'
import UpdateCompanyForm from './pages/postForm/updateCompanyContainer'
import Footer from './footer/footer'
import NotFound from './pages/404Page/404Page'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.landingScrollRef = React.createRef()
    this.redirectScrollRef = React.createRef()
    this.state = {
      showSmallScreenNavOptions: false
    }
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
      window.scrollTo({
        top: this.redirectScrollRef.current.offsetTop
      })
    }
  }

  render() {
    return (
      <div className='page-container' onClick={() => this.props.hideOptions()}>
        <content className='all-content'>
          <Header redirectScrollRef={this.redirectScrollRef} landingScrollRef={this.landingScrollRef}/>
          <Switch>
            <Route path='/user-dashboard' exact component={Dashboard} />
            <Route path='/login' exact component={SessionPage} />
            <Route path='/jobs/:postId' exact component={JobPost} />
            <Route path='/companies/:postId' exact component={CompanyPost} />
            <Route path='/jobs' component={JobPostsSearch} />
            <Route path='/companies' component={CompaniesSearch} />
            <Route path='/edit-a-job/:postId' component={UpdateJobPostForm}/>
            <Route path='/edit-a-company/:postId' component={UpdateCompanyForm}/>
            <Route path='/post-a-job' component={JobPostForm} />
            <Route path='/post-a-company' component={CompanyPostForm} />
            <Route path='/' exact render={() => <Home landingScrollRef={this.landingScrollRef}/>} />
            <Route component={NotFound} />
          </Switch>
        </content>
        <Footer/>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    currentRoute: state.currentRoute,
    currentUser: state.session.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateRoute: newRoute => dispatch(updateRoute(newRoute)),
    hideOptions: () => dispatch(hideOptions())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
