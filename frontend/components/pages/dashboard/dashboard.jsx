import React from 'react'
import DashboardNav from './dashboardNav'
import DashboardManager from './dashboardManager'
import TitleHeader from '../../header/titleHeader'
import { connect } from 'react-redux'
import { updateRoute } from '../../../actions/routeActions'
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
          delete: this.props.deleteJobPost,
          createRoute: '/post-a-job',
          editRoute: '/edit-a-job'
        },
        'company': {
          title: 'Company',
          delete: this.props.deleteCompany,
          createRoute: '/post-a-company',
          editRoute: '/edit-a-company'
        }
      }

      this.setState(stateMap[postType])
    })
  }

  render() {
    return (
      <div className='dashboard'>
        <TitleHeader message={'User Dashboard'}/>
        <section className='dashboard-contenet'>
          <DashboardNav
          updateManager={this.updateManager}
          selected={this.state.title}
          />
          <DashboardManager
          posts={this.state.title === 'Company' ? this.props.companies : this.props.jobPosts}
          del={this.state.delete}
          title={this.state.title}
          createRoute={this.state.createRoute}
          editRoute={this.state.editRoute}
          updateRoute={this.props.updateRoute}
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
    deleteCompany: companyId => dispatch(deleteCompany(companyId)),
    fetchJobPosts: (currentUser) => dispatch(fetchJobPosts(currentUser)),
    fetchCompanies: (currentUser) => dispatch(fetchCompanies(currentUser)),
    updateRoute: (newRoute) => dispatch(updateRoute(newRoute))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
