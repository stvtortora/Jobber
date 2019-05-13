import React from 'react'
import SearchForm from './searchForm'

export default ({ currentQuery }) => (
  <section className='filters'>
    <SearchForm
    searchBoxClass='filter-search-box'
    keyWordsClass='filter-search-keywords'
    submitButtonClass='filter-search-submit'
    currentQuery={currentQuery}
    />
  </section>
)
