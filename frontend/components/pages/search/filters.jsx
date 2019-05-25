import React from 'react'
import Filter from './filter'

export default ({ filterTypes, filterCounts, searchSpecifications, searchResults, updateSearch }) => {
  return Object.keys(filterCounts).map(filterType => {
    return (
      <Filter
      optionCounts={filterCounts[filterType]}
      filterType={filterType}
      filterTypeTitle={filterType.split('_').join(' ')}
      searchResults={searchResults}
      updateSearch={updateSearch}
      currentOptionSelected={searchSpecifications[filterType]}
      />
    )
  })
}
