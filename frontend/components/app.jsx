import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import Header from './header/header';
import JobsSearchContainer from './pages/search/jobsSearchContainer'

class App extends React.Component {
  constructor (props) {
    super(props)
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
          <Route path='/jobs' component={JobsSearchContainer} />
          <div className='under-header'></div>
      </content>
    )
  }
}

const Dum = () => {
  return (
    <div>YO</div>
  )

}
const mapStateToProps = state => {
  return {
    currentRoute: state.currentRoute
  }
}
// <Route path='/' exact component={PlaceBuyOrderForm} />

export default withRouter(connect(mapStateToProps)(App));
