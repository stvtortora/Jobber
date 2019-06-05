import React from 'react'
import Quill from 'quill'
import TitleHeader from '../../header/titleHeader'
import Errors from '../../errors/errors'
import MultiFieldRow from './multiFieldRow'
import merge from 'lodash/merge'

export default class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.initialState
    this.header = this.header.bind(this)
    this.formContent = this.formContent.bind(this)
    this.fieldRows = this.fieldRows.bind(this)
    this.update = this.update.bind(this)
    this.updateFile = this.updateFile.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
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

  update (field) {
    return e => this.setState({
        [field]: e.target.value
    });
  }

  updateFile(e) {
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

    let post = merge({}, this.state, {
      description: JSON.stringify(description),
      job_category_id: Number(this.state.job_category_id)
    })

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

  header () {
    const { currentUser } = this.props

    return (
      <TitleHeader
      message={`Post a ${this.props.formName}`}
      additionalData={
        !currentUser ?
        {
          message: `You must login to post a ${this.props.formName}.`,
          buttonText: 'Login / Register',
          buttonAction: () => this.props.updateRoute('/login'),
          useData: !Boolean(currentUser)
        } :
        {
          message: `You must post a company to post a job.`,
          buttonText: 'Post a Company',
          buttonAction: () => this.props.updateRoute('/post-a-company'),
          useData: Boolean(this.props.formName === 'Job' && !this.props.relatedRecords.company_id.ids.length)
        }
      }/>
    )
  }

  formContent () {
    const { currentUser } = this.props
    return (
      <div>
        <Errors/>
        <form onSubmit={this.handleSubmit}>
          {this.fieldRows()}
          <div className='quill-container'>
            <label>Description</label>
              <div id='editor'/>
          </div>
          <button className='submit-post'><p>Post</p></button>
        </form>
      </div>
    )
  }

  fieldRows () {
    return currentUser && (this.props.formName === 'Company' || this.props.relatedRecords.company_id.ids.length) ?
    <div>
      <span className='field-row'>
        <div className='title-field form-field'>
          <label>{`${this.props.formName} Title`}</label>
          <input type="text" value={this.state.title} onChange={this.update('title')}/>
        </div>
      </span>
      {<MultiFieldRow fields={this.props.formFields.firstRow} update={this.update} formState={this.state} relatedRecords={this.props.relatedRecords}/>}
      {<MultiFieldRow fields={this.props.formFields.secondRow} update={this.update} formState={this.state} relatedRecords={this.props.relatedRecords}/>}
      {<MultiFieldRow fields={this.props.formFields.thirdRow} update={this.update} formState={this.state} relatedRecords={this.props.relatedRecords}/>}
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
      } :
    </div> : <div/>
  }

  render() {
    return (
      <section className='job-post-form'>
        {this.header()}
        {this.formContent()}
      </section>
    )
  }
}
