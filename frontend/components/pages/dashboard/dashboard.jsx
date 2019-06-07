import React from 'react'
import DashboardNav from './dashBoardNav'
import PostManager from './postManager'
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
      deletePost: {}
    }
    this.updatePostManager = this.updatePostManager.bind(this)
  }

  componentDidMount() {
    this.updatePostManager('jobPost')
  }

  updatePostManager(postType) {
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
          deletePost: this.props.deleteJobPost,
          createPost: '/post-a-job',
          editPost: '/edit-a-job'
        },
        'company': {
          title: 'Company',
          deletePost: this.props.deleteCompany,
          createPost: '/post-a-company',
          editPost: '/edit-a-company'
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
          updatePostManager={this.updatePostManager}
          selected={this.state.title}
          />
          <PostManager
          posts={this.state.title === 'Company' ? this.props.companies : this.props.jobPosts}
          deletePost={this.state.deletePost}
          title={this.state.title}
          createPost={this.state.createPost}
          editPost={this.state.editPost}
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
