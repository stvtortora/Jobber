import React from 'react'
import { parseQuery } from '../../../util/queryUtil'

class SearchResults extends React.Component {
  constructor(props) {
    super(props)
    this.results = this.results.bind(this)
  }

  componentDidMount() {
    this.props.search(parseQuery(this.props.currentRoute))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentRoute !== this.props.currentRoute && this.props.isThisComponentsRoute) {
      this.props.search(parseQuery(this.props.currentRoute))
    }
  }

  results() {
    const { searchResults, searchResultOptions } = this.props
    const { stylingId, mainTitleKey, subTitleKey, buttonContentKey } = searchResultOptions

    return searchResults.ids.map(id => {
      const searchResult = searchResults.info[id]
      return (
        <li id={stylingId} className='search-result'>
          <div className='search-result-left'>
            <h3 className='search-result-title'>{searchResult[mainTitleKey]}</h3>
            <p className='search-result-subtitle'>{searchResult[subTitleKey]}</p>
          </div>
          <div className='search-result-right'>
            <p className='search-result-button'>{searchResult[buttonContentKey]}</p>
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
