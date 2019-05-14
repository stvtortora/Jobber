import React from 'react'
import SearchResults from './searchResults'
import SearchForm from './searchForm'
import { parseQuery, buildQuery, getLimit, getOffset } from '../../../util/queryUtil'

export default (props) => {
  const updateLimit = (e) => {
    buildQueryAndUpdateRoute(e.target.value, null, null, true, null)
  }

  const buildQueryAndUpdateRoute = (limit, offset, sort, setNewLimit, setNewOffset, setNewSort) => {
    props.updateRoute(
      `/jobs/${buildQuery(
        {},
        props.currentQuery,
        limit,
        offset,
        sort,
        setNewLimit,
        setNewOffset,
        setNewSort
      )}`
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
    const totalJobCount = props.searchResults.count
    const firstPost = totalJobCount > 0 ? postByNumber(1) : 0
    const lastPost = Math.min(postByNumber(limit()), totalJobCount)
    
    return (
      <div className='sort-and-limit-options'>
        <p className='showing-text'>{`Showing ${firstPost}-${lastPost} of ${totalJobCount} jobs`}</p>
        <div className='sorting'>
          <form>
            <select onChange={updateLimit}>
              <option selected={limit() === 10} value="10">Show 10</option>
              <option selected={limit() === 20} value="20">Show 20</option>
              <option selected={limit() === 50} value="50">Show 50</option>
            </select>
          </form>
        </div>
      </div>
    )
  }

  const paginationButtons = () => {
    return (
      <div></div>
    )
  }

  const postByNumber = n => {
    return limit() * (offset() - 1) + n
  }

  const offset = () => {
    return getOffset(props.currentRoute)
  }

  const limit = () => {
    return getLimit(props.currentRoute)
  }

  const totalPages = () => {
    return Math.ceil(offset() / limit())
  }

  if (props.currentRoute !== '/') {
    return(
      <content className='page-content'>
        <div className='content-container'>
          <div className='content-flex'>
            {filters()}
            <section className='main-content'>
              {sortAndLimitOptions()}
              <SearchResults {...props}/>
            </section>
            {paginationButtons()}
          </div>
        </div>
      </content>
    )
  }

  return []
}
//filters need to know limit
//sorters needs to know limit and set limit
//this is the only place where limit matters
// <Sorters currentRoute={props.currentRoute}/>
