import React from 'react'
import SectionHeader from './sectionHeader'
import { fetchJobCategories } from '../../../actions/jobCategoriesActions'
import { connect } from 'react-redux'

const imageMap = {
  'Engineer/Developer': 'desktop',
  'Marketing': 'line-chart',
  'Design/UX': 'image',
  'Product': 'product-hunt',
  'Finance': 'money',
  'HR': 'users',
  'Sales': 'shopping-cart',
  'Content': 'pencil-alt',
  'Data/Analytics': 'bar-chart',
  'Operations': 'tasks',
  'Project_Management': 'user',
  'Content': 'pencil'
}

class PopularCategories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
    this.display = this.display.bind(this)
    this.totalPositionCount = this.totalPositionCount.bind(this)
  }

  componentDidMount() {
    this.props.fetchJobCategories().then(() => {
      this.setState({
        loaded: true
      })
    })
  }

  display () {
    const { jobCategories } = this.props

    const topEight = Object.keys(jobCategories).sort((a, b) => {
      return jobCategories[a].openings > jobCategories[b].openings ? -1 : 1
    }).slice(0, 8)

    return topEight.map(id => {
      const jobCategory = this.props.jobCategories[id]
      return (
        <li key={id} className='category-box' onClick={() => this.props.updateRoute(`/jobs/?limit=10&offset=1&job_category=${jobCategory.name}`)}>
        <div className='border'>
          <i className={`fa fa-${imageMap[jobCategory.name]}`} aria-hidden="true"></i>

          <h4 className='category-name'>{jobCategory.name.split('_').join(' ')}</h4>
          <p className='category-openings'>{`${jobCategory.openings} open positions`}</p>
        </div>

        </li>
      )
    })
  }

  totalPositionCount () {
    let count = 0
    Object.keys(this.props.jobCategories).forEach(id => {
      count += this.props.jobCategories[id].openings
    })
    return count
  }

  render() {
    if (this.state.loaded) {
      return (
        <div className='popular-categories'>
          <SectionHeader id='black-text' title='Popular Categories' subtitle={`${this.totalPositionCount()} jobs live`}/>
          <ul>
            {this.display()}
          </ul>
        </div>
      )
    }

    return null
  }
}

const mapStateToProps = state => {
  return {
    jobCategories: state.records.jobCategories.info
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchJobCategories: () => dispatch(fetchJobCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularCategories)
// {imageMap[category.name]}
