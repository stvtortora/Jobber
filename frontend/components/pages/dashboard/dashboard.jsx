import React from 'react'
import DashboardNav from './dashboardNav'
import DashboardManager from './dashboardManager'
import { connect } from 'react-redux'
import { deleteJobPost, fetchJobPosts } from '../../../actions/jobPostsActions'
import { deleteCompany, fetchCompanies } from '../../../actions/companiesActions'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      posts: {},
      delete: {}
    }
    this.updateManager = this.updateManager.bind(this)
  }

  componentDidMount() {
    this.updateManager('jobPost')
  }

  updateManager(postType) {
    let fetch

    if (postType == 'jobPost') {
      fetch = this.props.fetchJobPosts
    } else {
      fetch = this.props.fetchCompanies
    }

    fetch(this.props.currentUser).then(() => {
      const stateMap = {
        'jobPost': {
          title: 'Job Post',
          posts: this.props.jobPosts,
          delete: this.props.deleteJobPost
        },
        'company': {
          title: 'Company',
          posts: this.props.companies,
          delete: this.props.deleteCompany
        }
      }

      this.setState(stateMap[postType])
    })
  }

  render() {
    return (
      <div className='dashboard'>
        <section className='dashboard-contenet'>
          <DashboardNav
          updateManager={this.updateManager}
          />
          <DashboardManager
          posts={this.state.posts}
          del={this.state.delete}
          />
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.id,
    jobPosts: state.records.jobPosts.info || {},
    companies: state.records.companies.info || {}
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteJobPost: jobPostId => dispatch(deleteJobPost(jobPostId)),
    deleteCompany: jobPostId => dispatch(deleteCompany(companyId)),
    fetchJobPosts: (currentUser) => dispatch(fetchJobPosts(currentUser)),
    fetchCompanies: () => dispatch(fetchCompanies())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
