import React from 'react'
import PopularCategories from './popularCategories'
// import SignpUpPrompt from './singUpPrompt'
// import FeaturedJobs from './FeaturedJobs'
import { connect } from 'react-redux'
import { updateRoute } from '../../../actions/routeActions'

const Home = ({ updateRoute }) => {
  return (
    <div className='home-page'>
      <PopularCategories updateRoute={updateRoute}/>
    </div>
  )
}
// <SignUpPrompt/>
// <FeaturedJobs/>

const mapDispatchToProps = dispatch => {
  return {
    updateRoute: (newRoute) => dispatch(updateRoute(newRoute))
  }
}

export default connect(null, mapDispatchToProps)(Home)
