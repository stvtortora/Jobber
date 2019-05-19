import React from 'react'
import { connect } from 'react-redux'
import { fetchJobCategories } from '../../../actions/jobCategoriesActions'
import { createJobPost } from '../../../actions/jobPostsActions'

const fieldMap = {
  'salary': ['$20000-$30000', '$30000-$40000','$40000-$50000','$50000-$60000','$60000-$70000','$70000-$80000','$80000-$90000','$90000-$100000','$100000-$1100000', '$110000-$1200000','$120000-$1300000','$130000-$1400000','$140000-$1500000','$150000-$1600000','$160000-$1700000','$170000-$1800000','$180000-$1900000','$190000-$2000000','$200000+'],
  'career_level': ['Junior', 'Mid', 'Senior', 'Lead', 'Assistant Manager', 'Manager', 'Department Head', 'Executive'],
  'industry': ['Ad Tech', 'Agriculture', 'Arts', 'FinTech', 'eCommerce', 'Digital Media', 'Sales', 'Software', 'GreenTech', 'Payments', 'Professional Services', 'Machine Learning'],
  'qualification': ['Associate Degree', 'Bachelor Degree', 'Master Degree', 'Doctorate Degree'],
  'experience': ['0-2 Years', '2-3 Years', '3-5 Years', '6-7 Years', '6-7 Years', '8-9 Years', '9-10 Years', '10+ Years'],
  'language': ['Arabic', 'English', 'Spanish', 'Mandarin', 'French', 'Portuguese', 'Hindi']
}

class JobPostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'title': '',
      'city': '',
      'description': '',
      'job_type': '',
      'job_category_id': ''
    }
    this.jobCategorySelector = this.jobCategorySelector.bind(this)
    this.constructFields = this.constructFields.bind(this)
    this.update = this.update.bind(this)
  }

  componentDidMount() {
    if (!this.props.jobCategories.ids.length) {
      this.props.fetchJobCategories()
    }
  }

  update (field) {
    return e => this.setState({
        [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createJobPost(this.state).then(() => {
      this.props.updateRoute('/')
    })
  }

  jobCategorySelector () {
    return this.props.jobCategories.ids.map(jobCategoryId => {
      const jobCategory = this.props.jobCategories.info[jobCategoryId]
      const title = `${jobCategory.name}`
      return <option selected={this.state.job_type === title} value={title}>{title}</option>
    })
  }

  constructFields (field) {
    return fieldMap[field].map(option => {
      return <option selected={this.state[field]=== option} value={option}>{option}</option>
    })
  }

  render() {
    return (
      <section className='jos-post-form'>
        <form onSubmit={this.handleSubmit}>
          <span className='title-field'>
            <label>Job Title</label>
            <input type="text" value={this.state.title} onChange={this.update('title')}/>
          </span>
          <span className='feild-row'>
            <div className='form-field'>
              <label>City</label>
              <input placeholder='e.g New York' type="password" value={this.state.password} onChange={this.update('password')}/>
            </div>
            <select onChange={this.update('job_type')}>
              <option selected={this.state.job_type === "Full Time"} value="Full Time">Full Time</option>
              <option selected={this.state.job_type === "Part Time"} value="Part Time">Part Time</option>
              <option selected={this.state.job_type === "Freelance"} value="Freelance">Freelance</option>
            </select>
            <select onChange={this.update('job_category_id')}>
              {this.jobCategorySelector()}
            </select>
          </span>
          <span className='feild-row'>
            <select onChange={this.update('salary')}>
              {this.constructFields('salary')}
            </select>
            <select onChange={this.update('career_level')}>
              {this.constructFields('career_level')}
            </select>
            <select onChange={this.update('industry')}>
              {this.constructFields('industry')}
            </select>
          </span>
          <span className='feild-row'>
            <select onChange={this.update('qualification')}>
              {this.constructFields('qualification')}
            </select>
            <select onChange={this.update('experience')}>
              {this.constructFields('experience')}
            </select>
            <select onChange={this.update('language')}>
              {this.constructFields('language')}
            </select>
          </span>
        </form>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    jobCategories: state.records.jobCategories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchJobCategories: () => dispatch(fetchJobCategories()),
    createJobPost: (job_post) => dispatch(createJobPost(job_post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobPostForm)
