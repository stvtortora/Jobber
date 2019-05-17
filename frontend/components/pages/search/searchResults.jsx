import React from 'react'
import { parseQuery, getSort } from '../../../util/queryUtil'

export default ({ searchResults, searchResultOptions }) => {
  const { stylingId, mainTitleKey, subTitleKey, buttonContentKey } = searchResultOptions

  return(
    <section className='search-results'>
      {
        searchResults.ids.map(id => {
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
    </section>
  )
}
