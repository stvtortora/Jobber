import React from 'react'
import { connect } from 'react-redux'
import SearchForm from '../pages/search/searchForm'

const HeaderContent = ({ currentRoute }) => {
  const sectionHeader = () => {
    return (
      <div className='home-section-header'>
        <h3>The Easiest Way To Get Your New Job</h3>
        <span>Find Full Time, Part Time, or Freelance Opportunities</span>
      </div>
    )
  }

  if (currentRoute !== '/login') {
    return (
      <content className='content'>
      <div className='home-page-content'>
      {sectionHeader()}
      <SearchForm
      searchBoxClass='home-search-box'
      keyWordsClass='search-keywords'
      submitButtonClass='search-submit'
      currentQuery={''}/>
      </div>
      </content>
    )
  }

  return []
}

const mapStateToProps = state => {
  return {
    currentRoute: state.currentRoute
  }
}

export default connect(mapStateToProps)(HeaderContent)
