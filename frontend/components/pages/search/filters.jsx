import React from 'react'
import Filter from './filter'

export default ({ filterTypes, searchSpecifications, searchResults, updateSearch }) => {
  return filterTypes.map(filterType => {
    return (
      <Filter
      filterType={filterType}
      filterTypeTitle={filterType.split('_').join(' ')}
      searchResults={searchResults}
      updateSearch={updateSearch}
      currentOptionSelected={searchSpecifications[filterType]}
      />
    )
  })
}
