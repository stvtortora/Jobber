import React from 'react'
import { connect } from 'react-redux'
import SearchForm from '../pages/search/searchForm'

const HeaderContent = ({ currentRoute }) => {
  const sectionHeader = () => {
    const getText = () => {
      const textMap = {
        '/': 'The Easiest Way To Get Your New Job',
        '/jobs/': 'Jobs',
        '/companies': 'Companies'
      }

      let text = ''
      const prefixes = ['/', '/jobs/',  '/companies']

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
  if (currentRoute === '/') {
    klassName = 'home-page-content'
  } else if (currentRoute.indexOf('/jobs/?') > -1) {
    klassName='non-home-page-content'
  } else {
    klassName='no-content'
  }

  return (
    <content className={klassName}>
      <div className='page-content'>
        {sectionHeader()}
        {
          currentRoute === '/' ?
          <SearchForm
          searchBoxClass='home-search-box'
          keyWordsClass='search-keywords'
          submitButtonClass='search-submit'
          currentQuery={''}/> :
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
