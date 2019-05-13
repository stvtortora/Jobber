import React from 'react'
import { buildQuery } from '../../../util/queryUtil'
import { updateRoute } from '../../../actions/routeActions'
import { connect } from 'react-redux'


class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'keyword': '',
      'city': ''
    }
    this.parseQueryAndUpdateRoute = this.parseQueryAndUpdateRoute.bind(this)
    this.updateQuery = this.updateQuery.bind(this)
  }

  parseQueryAndUpdateRoute() {
    console.log(this.state)
    this.props.updateRoute(`/jobs/${buildQuery(this.state)}`)
  }

  updateQuery(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  render() {
    const { searchBoxClass, keyWordsClass, submitButtonClass } = this.props;
    return (
      <section className={searchBoxClass}>
        <form onSubmit={this.parseQueryAndUpdateRoute}>
          <div className={keyWordsClass}>
            <input
            type='text'
            value={this.state.keyword}
            id='keyword-input'
            placeholder='Job title, keyword, or company name'
            onChange={this.updateQuery('keyword')}></input>
            <i className="fa fa-keyboard-o"></i>
          </div>
          <div className='search-location'>
            <input
            type='text'
            id='location-input'
            placeholder='Choose your city'
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
