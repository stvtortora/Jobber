import React from 'react'
import SearchForm from './searchForm'

class Filters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
      keyword: ''
    }
  }

  render() {
    return (
      <section className='filters'>
        <SearchForm
        searchBoxClass='filter-search-box'
        keyWordsClass='filter-search-keywords'
        submitButtonClass='filter-search-submit'
        />
      </section>
    )
  }
}

export default Filters
