import React from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { updateRoute } from '../actions/routeActions'
import Header from './header/header'
import JobPostsSearch from './pages/search/jobPostsSearchContainer'

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
  }

  render() {
    return (
      <content className='all-content'>
          <Header/>
          <Route path='/jobs' component={JobPostsSearch} />
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
