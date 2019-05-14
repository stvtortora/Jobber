import React from 'react'
import { parseQuery, getSort } from '../../../util/queryUtil'

class SearchResults extends React.Component {
  constructor(props) {
    super(props)
    this.results = this.results.bind(this)
    this.sortedIds = this.sortedIds.bind(this)
  }

  componentDidMount() {
    this.props.search(parseQuery(this.props.currentRoute))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentRoute !== this.props.currentRoute && this.props.isThisComponentsRoute) {
      this.props.search(parseQuery(this.props.currentRoute))
    }
  }

  sortedIds() {
    const { searchResults } = this.props
    const sortType = getSort(this.props.currentQuery)

    switch (sortType) {
      case 'title:asc':
        return searchResults.ids.sort((a, b) => searchResults.info[a].title < searchResults.info[b].title ? -1 : 1)
      case 'title:desc':
        return searchResults.ids.sort((a, b) => searchResults.info[a].title > searchResults.info[b].title ? -1 : 1)
      case 'created_at:desc':
        return searchResults.ids.revers()
      default:
        return searchResults.ids
    }
  }

  results() {
    const { searchResults, searchResultOptions } = this.props
    const { stylingId, mainTitleKey, subTitleKey, buttonContentKey } = searchResultOptions

    return this.sortedIds().map(id => {
      console.log(searchResults, 'results')
      const searchResult = searchResults.info[id]

      return (
        <li id={stylingId} className='search-result'>
          <img src={searchResult.picture_url} />
          <div className='search-result-details'>
            <div className='search-result-details-left'>
              <p className='search-result-title'>{searchResult[mainTitleKey]}</p>
              <p className='search-result-subtitle'>{searchResult[subTitleKey]}</p>
              <p className='search-result-city'>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                {searchResult.city.split('_').join(' ')}
              </p>
            </div>
            <div className='search-result-details-right'>
              <p className='search-result-button'>{searchResult[buttonContentKey].split('_').join(' ')}</p>
            </div>
          </div>
        </li>
      )
    })
  }

  render() {
    return(
      <section className='search-results'>
        {this.results()}
      </section>
    )
  }
}

export default SearchResults
