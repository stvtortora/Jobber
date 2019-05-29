import React from 'react'
import SearchResults from './searchResults'
import SearchForm from './searchForm'
import Filters from './filters'
import SortAndLimitOptions from './sortAndLimitOptions'
import PaginationButtons from './paginationButtons'
import { buildQuery, getLimit, getOffset, getSort } from '../../../util/queryUtil'
import merge from 'lodash/merge'

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contentLoaded: false
    }
    this.updateSearch = this.updateSearch.bind(this)
  }

  componentDidMount() {
    if (this.props.isThisComponentsRoute) {
      this.props.search(this.props.searchSpecifications).then(() => {
        this.setState({
          contentLoaded: true
        })
      })
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentQuery !== prevProps.currentQuery && this.props.isThisComponentsRoute) {
      this.props.search(this.props.searchSpecifications).then(() => {
        this.setState({
          contentLoaded: true
        })
      })
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
      }

      else {
        delete queryOptions[optionType]
      }

      if (optionType !== 'offset') queryOptions.offset = 1

      const { routePrefix } = this.props
      this.props.updateRoute(`${routePrefix}/${buildQuery(queryOptions)}`)
    }
  }

  sideBar() {
    const { currentQuery, filterTypes, searchSpecifications, searchResults, routePrefix } = this.props
    const { filterCounts } = searchResults
    return (
      <section className='side-bar'>
        <SearchForm
        routePrefix={routePrefix}
        searchBoxClass='side-bar-search-box'
        keyWordsClass='side-bar-search-keywords'
        submitButtonClass='side-bar-search-submit'
        currentQuery={currentQuery}/>
        <Filters
        filterCounts={filterCounts}
        filterTypes={filterTypes}
        searchSpecifications={searchSpecifications}
        searchResults={searchResults.info}
        updateSearch={this.updateSearch}/>
      </section>
    )
  }

  mainContent() {
    const { searchResults, searchSpecifications, routePrefix } = this.props
    const { info, filterCounts } = searchResults
    const { limit, order, offset } = searchSpecifications
    const firstFilter = filterCounts[Object.keys(filterCounts)[0]]

    const totalCount = Object.keys(firstFilter).reduce((count, option) => {
      count += firstFilter[option]
      return count
    }, 0)

    return (
      <section className='main-content'>
        <SortAndLimitOptions
        totalCount={totalCount}
        totalOnPage={Object.keys(info).length}
        resultsType={routePrefix.slice(1)}
        limit={limit}
        order={order}
        offset={offset}
        updateSearch={this.updateSearch}/>
        <SearchResults {...this.props}/>
        <PaginationButtons
        totalCount={totalCount}
        limit={limit}
        offset={offset}
        updateSearch={this.updateSearch}/>
      </section>
    )
  }

  render() {
    return(
      <content className='page-content'>
        {
          this.props.currentRoute !== '/' && this.state.contentLoaded ?
          <div className='content-container'>
            <div className='content-flex'>
              {this.sideBar()}
              {this.mainContent()}
            </div>
          </div>
          :
          <div className='loader-container'><div className="loader"><div></div><div></div><div></div></div></div>
        }
      </content>
    )
  }
}

export default SearchPage
