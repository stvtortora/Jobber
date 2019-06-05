import React from 'react'

class Filter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showOptions: true
    }
    this.toggleShowOptions = this.toggleShowOptions.bind(this)
    this.renderFilterOptions = this.renderFilterOptions.bind(this)
  }

  renderFilterOptions () {
    const { updateSearch, currentOptionSelected, filterType, filterTypeTitle, optionCounts } = this.props

    return currentOptionSelected ?

    <p className='selected-filter-option' onClick={() => updateSearch(filterType)(undefined)}>{`${currentOptionSelected.length ? currentOptionSelected : 'Unspecified'}`}</p>

    :

    Object.keys(optionCounts).map(option => {
      const optionTitle = option.length ? option.split('_').join(' ') : 'Unspecified'
      return (
        <li
        key={option}
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
