import React from 'react'
import SearchResults from './searchResults'
import SearchForm from './searchForm'
import { parseQuery, getLimit, getOffset } from '../../../util/queryUtil'

export default (props) => {
  const buildQueryAndUpdateRoute = (limit, setNewLimit, offset, setNewOffset) => {
    props.updateRoute(
      `/jobs/${buildQuery(this.state)}`,
      currentQuery.slice(5),
      limit,
      setNewLimit,
      offset,
      setNewOffset
    )
  }

  const filters = () => {
    return (
      <section className='filters'>
        <SearchForm
        searchBoxClass='filter-search-box'
        keyWordsClass='filter-search-keywords'
        submitButtonClass='filter-search-submit'
        currentQuery={props.currentQuery}
        />
      </section>
    )
  }

  const sortAndLimitOptions = () => {

    return (
      <div className='sort-and-limit-options'>

      </div>
    )
  }

  const paginationButtons = () => {
    return (
      <div></div>
    )
  }

  const totalPages = () => {
    return Math.ceil(getOffset(props.currentRoute) / getLimit(props.currentRoute))
  }

  return(
    <content className='page-content'>
      <div className='content-container'>
        <div className='content-flex'>
          {filters()}
          {sortAndLimitOptions()}
          <SearchResults {...props}/>
          {paginationButtons()}
        </div>
      </div>
    </content>
  )
}
//filters need to know limit
//sorters needs to know limit and set limit
//this is the only place where limit matters
// <Sorters currentRoute={props.currentRoute}/>
