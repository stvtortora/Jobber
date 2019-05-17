import React from 'react'
import SearchResults from './searchResults'
import SearchForm from './searchForm'
import Filters from './filters'
import SortAndLimitOptions from './sortAndLimitOptions'
import { buildQuery, getLimit, getOffset, getSort } from '../../../util/queryUtil'
import merge from 'lodash/merge'

class SearchContent extends React.Component {
  constructor(props) {
    super(props)
    this.updateSearch = this.updateSearch.bind(this)
    this.paginationButtons = this.paginationButtons.bind(this)
  }

  componentDidMount() {
    this.props.search(this.props.searchSpecifications)
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentQuery !== prevProps.currentQuery && this.props.isThisComponentsRoute) {
      this.props.search(this.props.searchSpecifications)
    }
  }

  updateSearch(optionType) {
    return e => {
      let queryOptions = merge({}, this.props.searchSpecifications)

      if (e) {
        queryOptions = merge(
          {},
          queryOptions,
          { [optionType]: typeof e === 'string' ? e : e.target.value }
        )
      } else {
        delete queryOptions[optionType]
      }

      this.props.updateRoute(`/jobs/${buildQuery(queryOptions)}`)
    }
  }

  sideBar() {
    const { currentQuery, filterTypes, searchSpecifications, searchResults } = this.props
    return (
      <section className='side-bar'>
        <SearchForm
        searchBoxClass='side-bar-search-box'
        keyWordsClass='side-bar-search-keywords'
        submitButtonClass='side-bar-search-submit'
        currentQuery={currentQuery}/>
        <Filters
        filterTypes={filterTypes}
        searchSpecifications={searchSpecifications}
        searchResults={searchResults.info}
        updateSearch={this.updateSearch}
        />
      </section>
    )
  }

  mainContent() {
    const { searchResults, searchSpecifications } = this.props
    const { totalCount, info } = searchResults
    const { limit, order, offset } = searchSpecifications

    // {this.sortAndLimitOptions()}
    return (
      <section className='main-content'>
        <SortAndLimitOptions
        totalCount={totalCount}
        totalOnPage={Object.keys(info).length}
        limit={limit}
        order={order}
        offset={offset}
        updateSearch={this.updateSearch}
        />
        <SearchResults {...this.props}/>
      </section>
    )
  }
  paginationButtons() {
    return (
      <div></div>
    )
  }

  render() {
    if (this.props.currentRoute !== '/') {
      return(
        <content className='page-content'>
          <div className='content-container'>
            <div className='content-flex'>
              {this.sideBar()}
              {this.mainContent()}
            </div>
          </div>
        </content>
      )
    }

    return []
  }
}

export default SearchContent
