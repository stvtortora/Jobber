import React from 'react'
import { parseQuery, getSort } from '../../../util/queryUtil'

class SearchResults extends React.Component {
  constructor(props) {
    super(props)
    this.results = this.results.bind(this)
  }

  componentDidMount() {
    this.props.search(parseQuery(this.props.currentQuery))
  }

  componentDidUpdate(prevProps) {

    if (this.props.currentRoute !== prevProps.currentRoute && this.props.isThisComponentsRoute) {
      this.props.search(parseQuery(this.props.currentQuery))
    }
  }

  results() {
    const { searchResults, searchResultOptions } = this.props
    const { stylingId, mainTitleKey, subTitleKey, buttonContentKey } = searchResultOptions

    return searchResults.ids.map(id => {
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
