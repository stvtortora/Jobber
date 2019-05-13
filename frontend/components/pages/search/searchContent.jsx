import React from 'react'
import Filters from './filters'
import SortAndLimitOptions from './sortAndLimitOptions'
import SearchResults from './searchResults'
import { parseQuery } from '../../../util/queryUtil'

export default (props) => {
  return(
    <content className='page-content'>
      <div className='content-container'>
        <div className='content-flex'>
          <Filters currentQuery={props.currentRoute}/>
          <SortAndLimitOptions currentQuery={props.currentRoute}/>
          <SearchResults {...props}/>
        </div>
      </div>
    </content>
  )
}
//filters need to know limit
//sorters needs to know limit and set limit
//this is the only place where limit matters
// <Sorters currentRoute={props.currentRoute}/>
