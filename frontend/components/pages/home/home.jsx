import React from 'react'
import PopularCategories from './popularCategories'
import SignUpPrompt from './signUpPrompt'
import LatestJobs from './latestJobs'
import InquiryBanner from './inquiryBanner'
import { connect } from 'react-redux'
import { updateRoute } from '../../../actions/routeActions'

const Home = ({ updateRoute, scrollRef }) => {
  return (
    <div className='home-page' ref={scrollRef}>
      <PopularCategories updateRoute={updateRoute}/>
      <SignUpPrompt updateRoute={updateRoute}/>
      <LatestJobs updateRoute={updateRoute}/>
      <InquiryBanner/>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    updateRoute: (newRoute) => dispatch(updateRoute(newRoute))
  }
}

export default connect(null, mapDispatchToProps)(Home)
