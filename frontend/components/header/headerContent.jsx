import React from 'react'
import { connect } from 'react-redux'
import SearchForm from '../pages/search/searchForm'
import ScrollArrow from './scrollArrow'

const HeaderContent = ({ currentRoute, landingScrollRef }) => {
  const sectionHeader = () => {
    const getText = () => {
      const textMap = {
        '/': 'The Easiest Way To Land Your New Job',
        '/jobs/': 'Jobs',
        '/companies': 'Companies'
      }

      let text = ''
      const prefixes = ['/', '/jobs/', '/companies']

      prefixes.forEach(prefix => {
        if (currentRoute.indexOf(prefix) > -1) {
          text = textMap[prefix]
        }
      })

      return text
    }

    return (
      <div className='form-section-header'>
        <h3>
        {
          getText()
        }
        </h3>
        {
          currentRoute === '/' ?
          <span>Find Full Time, Part Time, or Freelance Opportunities</span> :<div></div>
        }
      </div>
    )
  }

  let klassName
  let routePrefix
  if (currentRoute === '/') {
    klassName = 'home-page-content'
    routePrefix = '/jobs'
  } else if (currentRoute.indexOf('/jobs/?') > -1 || currentRoute.indexOf('/companies/?') > -1) {
    klassName='non-home-page-content'
    routePrefix = currentRoute.indexOf('/jobs/?') > -1 ? '/jobs' : '/companies'
  } else {
    klassName='no-content'
  }

  return (
    <content className={klassName}>
      <div className='page-content'>
        {sectionHeader()}
        {
          currentRoute === '/' ?
          <div>
            <SearchForm
            routePrefix={routePrefix}
            searchBoxClass='home-search-box'
            keyWordsClass='search-keywords'
            submitButtonClass='search-submit'
            currentQuery={''}
            initialState={{'keyword': '', 'city': ''}}/>
            <ScrollArrow landingScrollRef={landingScrollRef}/>
          </div>
          :
          <div></div>
        }
      </div>
    </content>
  )


}


const mapStateToProps = state => {
  return {
    currentRoute: state.currentRoute,
  }
}

export default connect(mapStateToProps)(HeaderContent)
