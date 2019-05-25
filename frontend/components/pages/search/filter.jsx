import React from 'react'

class Filter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showOptions: true
    }
    this.toggleShowOptions = this.toggleShowOptions.bind(this)
    this.renderFilterOptions = this.renderFilterOptions.bind(this)
    // this.getOptionCounts = this.getOptionCounts.bind(this)
  }

  // getOptionCounts() {
  //   const { searchResults, filterType } = this.props
  //   return Object.keys(searchResults).reduce((optionCounts, resultId) => {
  //     const filterValue = searchResults[resultId][filterType]
  //     if (optionCounts[filterValue]) {
  //       optionCounts[filterValue]++
  //     } else {
  //       optionCounts[filterValue] = 1
  //     }
  //     return optionCounts
  //   }, {})
  // }

  renderFilterOptions () {
    const { updateSearch, currentOptionSelected, filterType, filterTypeTitle, optionCounts } = this.props
    // const optionCounts = this.getOptionCounts()

    return currentOptionSelected ?

    <p className='selected-filter-option' onClick={() => updateSearch(filterType)(undefined)}>{`${currentOptionSelected}`}</p>

    :

    Object.keys(optionCounts).map(option => {
      const optionTitle = option.split('_').join(' ')

      return (
        <li
        className='filter-option'
        onClick={() => updateSearch(filterTypeTitle)(option)}>
          <p>{`${optionTitle} (${optionCounts[option]})`}</p>
        </li>
      )
    })
  }

  toggleShowOptions() {
    this.setState({ showOptions: !this.state.showOptions })
  }

  render() {
    return (
      <div className='filter'>
        <span className='filter-title' onClick={this.toggleShowOptions}>
          <p>{this.props.filterTypeTitle}</p>
          { this.state.showOptions ? <i className="fa fa-minus" aria-hidden="true"></i> : <i class="fa fa-plus" aria-hidden="true"></i> }
        </span>
        {
          this.state.showOptions ?
          this.renderFilterOptions() : []
        }
      </div>
    )
  }
}

export default Filter
