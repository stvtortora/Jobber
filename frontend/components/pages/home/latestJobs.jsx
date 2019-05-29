import React from 'react'
import SectionHeader from './sectionHeader'
import SearchResults from '../search/searchResults'
import { searchJobPosts } from '../../../actions/jobPostsActions'
import { connect } from 'react-redux'

class LatestJobs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.props.searchJobPosts({
      'order': 'created_at desc',
      'limit': '10',
      'offset': '1'
    }).then(() => {
      this.setState({
        loaded: true
      })
    })
  }

  render() {
    if (this.state.loaded) {
      const { jobPosts } = this.props
      const { filterCounts } = jobPosts

      const firstFilter = filterCounts[Object.keys(filterCounts)[0]]

      const totalCount = Object.keys(firstFilter).reduce((count, option) => {
        count += firstFilter[option]
        return count
      }, 0)

      return (
        <div className='featured-jobs'>
          <SectionHeader id='black-text' title='Lastest Jobs' subtitle={`${totalCount} current listings`}/>
          <SearchResults
          searchResults={this.props.jobPosts}
          searchResultOptions={{
            stylingId: 'job-post-result',
            mainTitleKey: 'title',
            subTitleKey: 'company',
            buttonContentKey: 'job_type'
          }}
          updateRoute={this.props.updateRoute}
          routePrefix={'/jobs'}
          />
          <button onClick={() => this.props.updateRoute('/jobs/?limit=10&offset=1&order=created_at:desc')}>Search All Jobs</button>
        </div>
      )
    }

    return null
  }
}

const mapStateToProps = state => {
  const jobPosts = state.records.jobPosts

  return {
    jobPosts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchJobPosts: (query) => dispatch(searchJobPosts(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestJobs)
