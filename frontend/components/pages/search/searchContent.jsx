import React from 'react'
import SearchResults from './searchResults'
import SearchForm from './searchForm'
import { parseQuery, buildQuery, getLimit, getOffset, getSort } from '../../../util/queryUtil'
import merge from 'lodash/merge'

export default (props) => {
  const updateRoute = (optionType) => {
    return e => {
      const queryOptions = merge(
        {},
        parseQuery(props.currentQuery),
        { [optionType]: typeof e === 'string' ? e : e.target.value }
      )
      console.log(queryOptions, 'qo')
      props.updateRoute(`/jobs/${buildQuery(queryOptions)}`)
    }
  }

  const filters = () => {
    const groupTypes = props.searchResults.group_counts

    return Object.keys(groupTypes).map(groupType => {
      const groupTypeTitle = groupType.split('_').join(' ')
      const optionCounts = groupTypes[groupType]

      return (
        <div className='filter'>
          <span className='filter-title'>{groupTypeTitle}</span>
          {
            Object.keys(optionCounts).map(option => {
              const optionTitle = option.split('_').join(' ')

              return (
                <li
                className='filter-option'
                onClick={() => updateRoute(groupTypeTitle)(option)}>
                  <p>{`${optionTitle} (${optionCounts[option]})`}</p>
                </li>
              )
            })
          }
        </div>
      )
    })
  }

  const sideBar = () => {
    return (
      <section className='side-bar'>
        <SearchForm
        searchBoxClass='side-bar-search-box'
        keyWordsClass='side-bar-search-keywords'
        submitButtonClass='side-bar-search-submit'
        currentQuery={props.currentQuery}/>
        {filters()}
      </section>
    )
  }

  const sortAndLimitOptions = () => {
    const getTotalCount = () => {
      const group_counts = props.searchResults.group_counts
      const group_types = Object.keys(group_counts)

      if (group_types.length) {
        const groups = group_counts[group_types[0]]
        let totalCount = 0

        Object.keys(groups).forEach(key => {
          totalCount += groups[key]
        })

        return totalCount
      }

      return 0
    }

    const totalJobCount = getTotalCount()
    const firstPost = totalJobCount > 0 ? postByNumber(1) : 0
    const lastPost = Math.min(postByNumber(limit()), totalJobCount)

    return (
      <div className='sort-and-limit-options'>
        <div className='showing-text'>{`Showing ${firstPost}-${lastPost} of ${totalJobCount} jobs`}</div>
        <div className='sort-and-limit-forms'>
          <form>
            <select onChange={updateRoute('order')}>
              <option selected={sort() === 'created_at:desc'} value='created_at:desc'>Sort By: Newest</option>
              <option selected={sort() === 'title:asc'} value='title:asc'>Sort By: Name Ascending</option>
              <option selected={sort() === 'title:desc'} value='title:desc'>Sort By: Name Decending</option>
            </select>
          </form>
          <form>
            <select onChange={updateRoute('limit')}>
              <option selected={limit() === 10} value="10">Show: 10</option>
              <option selected={limit() === 20} value="20">Show: 20</option>
              <option selected={limit() === 50} value="50">Show: 50</option>
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

  const sort = () => {
    return getSort(props.currentRoute)
  }

  const totalPages = () => {
    return Math.ceil(offset() / limit())
  }

  if (props.currentRoute !== '/') {
    return(
      <content className='page-content'>
        <div className='content-container'>
          <div className='content-flex'>
            {sideBar()}
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
