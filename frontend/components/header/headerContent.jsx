import React from 'react'
import SearchForm from '../pages/search/searchForm'

export default () => {
  const sectionHeader = () => {
    return (
      <div className='home-section-header'>
        <h3>The Easiest Way To Get Your New Job</h3>
        <span>Find Full Time, Part Time, or Freelance Opportunities</span>
      </div>
    )
  }
  return (
    <content className='content'>
      <div className='home-page-content'>
        {sectionHeader()}
        <SearchForm
        searchBoxClass='home-search-box'
        keyWordsClass='search-keywords'
        submitButtonClass='search-submit'
        currentQuery={null}/>
      </div>
    </content>
  )
}
