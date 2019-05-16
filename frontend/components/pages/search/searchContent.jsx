import React from 'react'
import SearchResults from './searchResults'
import SearchForm from './searchForm'
import { buildQuery, getLimit, getOffset, getSort } from '../../../util/queryUtil'
import merge from 'lodash/merge'

class SearchContent extends React.Component {
  constructor(props) {
    super(props)
    this.updateSearch = this.updateSearch.bind(this)
    this.filters = this.filters.bind(this)
    this.sortAndLimitOptions = this.sortAndLimitOptions.bind(this)
    this.paginationButtons = this.paginationButtons.bind(this)
    this.postByNumber = this.postByNumber.bind(this)
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

  filters () {
    const getOptionCounts = (filterType) => {
      return Object.keys(this.props.searchResults.info).reduce((optionCounts, resultId) => {
        const filterValue = this.props.searchResults.info[resultId][filterType]
        if (optionCounts[filterValue]) {
          optionCounts[filterValue]++
        } else {
          optionCounts[filterValue] = 1
        }
        return optionCounts
      }, {})
    }

    const { searchSpecifications } = this.props
    return this.props.filterTypes.map(filterType => {
      const filterTypeTitle = filterType.split('_').join(' ')
      const optionCounts = getOptionCounts(filterType)

      return (
        <div className='filter'>
          <span className='filter-title'>
            <p>{filterTypeTitle}</p>
            <i class="fa fa-minus" aria-hidden="true"></i>
          </span>
          {
            searchSpecifications[filterType] ?

            <p className='selected-filter-option' onClick={() => this.updateSearch(filterType)(undefined)}>{`${searchSpecifications[filterType]}`}</p> :

            Object.keys(optionCounts).map(option => {
              const optionTitle = option.split('_').join(' ')

              return (
                <li
                className='filter-option'
                onClick={() => this.updateSearch(filterTypeTitle)(option)}>
                  <p>{`${optionTitle} (${optionCounts[option]})`}</p>
                </li>
              )
            })
          }
        </div>
      )
    })
  }

  sideBar() {
    return (
      <section className='side-bar'>
        <SearchForm
        searchBoxClass='side-bar-search-box'
        keyWordsClass='side-bar-search-keywords'
        submitButtonClass='side-bar-search-submit'
        currentQuery={this.props.currentQuery}/>
        {this.filters()}
      </section>
    )
  }

  sortAndLimitOptions() {
    const { totalCount, info } = this.props.searchResults
    const { limit, order } = this.props.searchSpecifications
    const firstPost = totalCount > 0 ? this.postByNumber(1) : 0
    const lastPost = firstPost + Math.min(Object.keys(info).length, limit) - 1

    return (
      <div className='sort-and-limit-options'>
        <div className='showing-text'>{`Showing ${firstPost}-${lastPost} of ${totalCount} jobs`}</div>
        <div className='sort-and-limit-forms'>
          <form>
            <select onChange={this.updateSearch('order')}>
              <option selected={order === 'created_at:desc'} value='created_at:desc'>Sort By: Newest</option>
              <option selected={order === 'title:asc'} value='title:asc'>Sort By: Name Ascending</option>
              <option selected={order === 'title:desc'} value='title:desc'>Sort By: Name Decending</option>
            </select>
          </form>
          <form>
            <select onChange={this.updateSearch('limit')}>
              <option selected={limit === 10} value="10">Show: 10</option>
              <option selected={limit === 20} value="20">Show: 20</option>
              <option selected={limit === 50} value="50">Show: 50</option>
            </select>
          </form>
        </div>
      </div>
    )
  }

  paginationButtons() {
    return (
      <div></div>
    )
  }

  postByNumber(n) {
    const { limit, offset } = this.props.searchSpecifications
    return limit * (offset - 1) + n
  }

  render() {
    if (this.props.currentRoute !== '/') {
      return(
        <content className='page-content'>
          <div className='content-container'>
            <div className='content-flex'>
              {this.sideBar()}
              <section className='main-content'>
                {this.sortAndLimitOptions()}
                <SearchResults {...this.props}/>
              </section>
              {this.paginationButtons()}
            </div>
          </div>
        </content>
      )
    }

    return []
  }
}

export default SearchContent
