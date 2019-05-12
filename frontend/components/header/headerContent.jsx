import React from 'react'
import { queryParser } from '../../util/queryUtil'
import { updateRoute } from '../../actions/routeActions'
import { connect } from 'react-redux'

class HeaderContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'keyword': '',
      'city': ''
    }
    this.parseQueryAndUpdateRoute = this.parseQueryAndUpdateRoute.bind(this)
    this.sectionHeader = this.sectionHeader.bind(this)
    this.searchBox = this.searchBox.bind(this)
    this.updateQuery = this.updateQuery.bind(this)
  }

  parseQueryAndUpdateRoute() {
    console.log(this.state)
    this.props.updateRoute(`/jobs/${queryParser(this.state)}`)
  }

  sectionHeader() {
    return (
      <div className='home-section-header'>
        <h3>The Easiest Way To Get Your New Job</h3>
        <span>Find Full Time, Part Time, or Freelance Opportunities</span>
      </div>
    )
  }

  searchBox() {
    return (
      <section className='home-search-box'>
        <form onSubmit={this.parseQueryAndUpdateRoute}>
          <div className='search-keywords'>
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
          <div className='search-submit'>
            <button type='submit'><i className="fa fa-search" aria-hidden="true"></i></button>
          </div>
        </form>
      </section>
    )
  }

  updateQuery(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  render() {
    return (
      <content className='content'>
        <div className='home-page-content'>
            {this.sectionHeader()}
            {this.searchBox()}
          </div>
      </content>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateRoute: newRoute => dispatch(updateRoute(newRoute))
  }
}

export default connect(null, mapDispatchToProps)(HeaderContent)
