import React from 'react'
import Filters from './filters'
import SearchResults from './searchResults'
import { parseQuery } from '../../../util/queryUtil'

export default (props) => {
  return(
    <content className='page-content'>
      <div className='content-container'>
        <div className='content-flex'>
          <Filters/>
          <SearchResults {...props}/>
        </div>
      </div>
    </content>
  )
}
