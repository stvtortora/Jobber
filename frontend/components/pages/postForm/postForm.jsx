import React from 'react'
import Quill from 'quill'
import TitleHeader from '../../header/titleHeader'
import Errors from '../../errors/errors'
import merge from 'lodash/merge'

const textFields = ['city', 'website', 'linked_in', 'twitter', 'phone_number', 'tagline', 'facebook']

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
    this.constructAssociatedFields = this.constructAssociatedFields.bind(this)
    this.constructFields = this.constructFields.bind(this)
    this.update = this.update.bind(this)
    this.updateFile = this.updateFile.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    if (!this.props.currentRouter) {
      this.props.history.push('/login')
    }

    else {
      const { relatedRecords, currentUser } = this.props

      if (relatedRecords) {
        this.props.fetch(currentUser)
      }

      const options = {
        placeholder: 'Describe this role',
        theme: 'snow'
      };

      this.editor = new Quill(document.getElementById('editor'), options)

      if (this.state.description) {
        this.editor.setContents(JSON.parse(this.state.description).richText)
        this.setState({description: null})
      }
    }
  }

  update (field) {
    return e => this.setState({
        [field]: e.target.value
    });
  }

  updateFile(e) {
    console.log(e.currentTarget.files)
    this.setState({
      'picture': e.currentTarget.files[0]
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    const description = {
      html: this.editor.root.innerHTML,
      richText: this.editor.getContents()
    }

    let post = merge({}, this.state, { description: JSON.stringify(description), job_category_id: Number(this.state.job_category_id) })
    let formData
    if (this.state.picture) {
      formData = new FormData()
      Object.keys(post).forEach(param => {
        formData.append(`company[${param}]`, post[param])
      })
    }

    post = formData ? formData : post

    this.props.action(post).then(post => {
      this.props.updateRoute(`${this.props.redirectRoute + post[this.props.newRecordKey].id}`)
    })
  }

  constructAssociatedFields (field) {
    return this.props.relatedRecords[field].ids.map(recordId => {
      const record = this.props.relatedRecords[field].info[recordId]
      const title = `${record.name ? record.name : record.title}`
      return <option selected={this.state[field] === record.id} value={record.id}>{title}</option>
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
                <input placeholder={textPlaceHolders[field]} type='text' value={this.state[field]} onChange={this.update(field)}/> :
                <select onChange={this.update(field)}>
                  <option value=''>{`Choose ${['a','e','i','o','u'].includes(displayTitle[0]) ? 'an' : 'a'} ${displayTitle}...`}</option>
                  {
                    field.split('_').includes('id') ?
                    this.constructAssociatedFields(field) :
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
    return fieldMap[field].map(option => {
      return <option selected={this.state[field]=== option} value={option}>{option}</option>
    })
  }

  render() {
    if (this.props.currentUser) {
      return (
        <section className='job-post-form'>
          <TitleHeader message={`Post a ${this.props.formName}`}/>
          <Errors/>
          <form onSubmit={this.handleSubmit}>
            <span className='field-row'>
              <div className='title-field form-field'>
                <label>{`${this.props.formName} Title`}</label>
                <input type="text" value={this.state.title} onChange={this.update('title')}/>
              </div>
            </span>
            {this.constructRow(this.props.formFields.firstRow)}
            {this.constructRow(this.props.formFields.secondRow)}
            {this.constructRow(this.props.formFields.thirdRow)}
            {
              this.props.includeImageUpload ?
              <span className='field-row'>
                <div className='file-field'>
                  <label>Logo</label>
                  <input type='file' onChange={this.updateFile}/>
                </div>
              </span>
              :
              <div></div>
            }
            <div className='quill-container'>
              <label>Description</label>
                <div id='editor'/>
            </div>
            <button><p>Post</p></button>
          </form>
        </section>
      )
    }

    return null
  }
}
