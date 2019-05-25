import React from 'react'
import { buildQuery, parseQuery } from '../../../util/queryUtil'
import { updateRoute } from '../../../actions/routeActions'
import { connect } from 'react-redux'
import merge from 'lodash/merge'

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'keyword': '',
      'city': ''
    }
    this.buildQueryAndUpdateRoute = this.buildQueryAndUpdateRoute.bind(this)
    this.updateQuery = this.updateQuery.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  buildQueryAndUpdateRoute() {
    const queryOptions = merge({}, parseQuery(this.props.currentQuery), this.state)
    this.props.updateRoute(`/jobs/${buildQuery(queryOptions)}`)
  }

  handleKeyPress (e) {
    if (e.key === 'Enter') {
      this.buildQueryAndUpdateRoute()
    }
  }

  updateQuery(field) {
    return (e) => {
      console.log('updating')
      this.setState({[field]: e.target.value})
    }
  }

  render() {
    const { searchBoxClass, keyWordsClass, submitButtonClass } = this.props;
    return (
      <section className={searchBoxClass}>
        <form onSubmit={this.buildQueryAndUpdateRoute}>
          <div className={keyWordsClass}>
            <input
            type='text'
            value={this.state.keyword}
            id='keyword-input'
            placeholder='Job title, keyword, or company name'
            onKeyPress={this.handleKeyPress}
            onChange={this.updateQuery('keyword')}></input>
            <i className="fa fa-keyboard-o"></i>
          </div>
          <div className='search-location'>
            <input
            type='text'
            id='location-input'
            value={this.state.city}
            placeholder='Choose your city'
            onKeyPress={this.handleKeyPress}
            onChange={this.updateQuery('city')}
            ></input>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
          </div>
          <div className={submitButtonClass}>
            <button type='submit'><i className="fa fa-search" aria-hidden="true"></i></button>
          </div>
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateRoute: newRoute => dispatch(updateRoute(newRoute))
  }
}

export default connect(null, mapDispatchToProps)(SearchForm)
