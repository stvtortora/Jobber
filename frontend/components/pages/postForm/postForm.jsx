import React from 'react'
import Quill from 'quill'
import merge from 'lodash/merge'
import quill from './quill'

const textFields = ['city', 'website', 'linked_in', 'twitter', 'phone_number', 'tagline']

const textPlaceHolders = {
  'city': 'e.g New York', 'website': 'e.g www.compnaywebsite.com', 'linked_in': 'e.g linkedin.com/username', 'twitter': 'Enter your Twitter url...', 'phone_number': 'xxxxxxxxxx', 'tagline': 'e.g We get it done!'
}

const fieldMap = {
  'job_type': ['Full Time', 'Part Time', 'Freelance'],
  'salary': ['$20000-$30000', '$30000-$40000','$40000-$50000','$50000-$60000','$60000-$70000','$70000-$80000','$80000-$90000','$90000-$100000','$100000-$1100000', '$110000-$1200000','$120000-$1300000','$130000-$1400000','$140000-$1500000','$150000-$1600000','$160000-$1700000','$170000-$1800000','$180000-$1900000','$190000-$2000000','$200000+'],
  'career_level': ['Junior', 'Mid', 'Senior', 'Lead', 'Assistant Manager', 'Manager', 'Department Head', 'Executive'],
  'industry': ['Ad Tech', 'Agriculture', 'Arts', 'FinTech', 'eCommerce', 'Digital Media', 'Sales', 'Software', 'GreenTech', 'Payments', 'Professional Services', 'Machine Learning'],
  'qualification': ['Associate Degree', 'Bachelor Degree', 'Master Degree', 'Doctorate Degree'],
  'experience': ['0-2 Years', '2-3 Years', '3-5 Years', '6-7 Years', '6-7 Years', '8-9 Years', '9-10 Years', '10+ Years'],
  'language': ['Arabic', 'English', 'Spanish', 'Mandarin', 'French', 'Portuguese', 'Hindi'],
  'team_size': ['<10', '10-25', '25-50', '50-100', '100-200', '200-300', '300-500', '500+']
}

export default class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.initialState
    this.constructRow = this.constructRow.bind(this)
    this.constructIdFields = this.constructIdFields.bind(this)
    this.constructFields = this.constructFields.bind(this)
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const { relatedRecords } = this.props
    if (relatedRecords && !relatedRecords.ids.length) {
      this.props.fetch()
    }

    const options = {
      placeholder: 'Describe this role',
      theme: 'snow'
    };

    this.editor = new Quill(document.getElementById('editor'), options);
  }

  update (field) {
    return e => this.setState({
        [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const job_post = merge({}, this.state, { description: this.editor.root.innerHTML, job_category_id: Number(this.state.job_category_id) })

    this.props.create(job_post).then(() => {
      this.props.updateRoute('/')
    })
  }

  constructIdFields (field) {
    return this.props.relatedRecords.ids.map(recordId => {
      const record = this.props.relatedRecords.info[recordId]
      const title = `${record.name}`
      return <option selected={this.state.job_type === title} value={record.id}>{title}</option>
    })
  }

  constructRow(fields) {
    return (
      <span className='field-row'>
      {
        fields.map(field => {
          const displayTitle = `${field.split('_id').join('').split('_').join(' ')}`
          return (
            <div className='non-title-field form-field'>
              <label>{displayTitle}</label>
              {
                textFields.includes(field) ?
                <input placeholder={textPlaceHolders[field]} type='text' value={this.state.city} onChange={this.update(field)}/> :
                <select onChange={this.update(field)}>
                  <option value=''>{`Choose ${['a','e','i','o','u'].includes(displayTitle[0]) ? 'an' : 'a'} ${displayTitle}...`}</option>
                  {
                    field.split('_').includes('id') ?
                    this.constructIdFields(field) :
                    this.constructFields(field)
                  }
                </select>
              }
            </div>
          )
        })
      }
      </span>
    )
  }

  constructFields (field) {
    console.log(field)
    return fieldMap[field].map(option => {
      return <option selected={this.state[field]=== option} value={option}>{option}</option>
    })
  }

  render() {
    return (
      <section className='job-post-form'>
        <form onSubmit={this.handleSubmit}>
          <span className='field-row'>
            <div className='title-field form-field'>
              <label>Job Title</label>
              <input type="text" value={this.state.title} onChange={this.update('title')}/>
            </div>
          </span>
          {this.constructRow(this.props.formFields.firstRow)}
          {this.constructRow(this.props.formFields.secondRow)}
          {this.constructRow(this.props.formFields.thirdRow)}
          <div className='quill-container'>
            <label>Description</label>
              <div id='editor'/>
          </div>
          <button><p>Post Job</p></button>
        </form>
      </section>
    )
  }
}
