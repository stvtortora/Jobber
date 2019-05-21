import React from 'react'
import PostForm from './postForm'

export default class UpdatePostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {postLoaded: false}
  }

  componentDidMount() {
    this.props.loadPost(this.props.postId).then(() => {
      this.setState({postLoaded: true})
    })
  }

  render() {
    if (this.state.postLoaded) {

      const {
        action,
        updateRoute,
        fetch,
        post,
        newRecordKey,
        redirectRoute,
        formName,
        formFields,
        relatedRecords,
        includeImageUpload
      } = this.props

      const initialState = Object.keys(post).reduce((state, field) => {
        if (field !== 'picture' && post[field]) {
          state[field] = post[field]
        }
        return state
      }, {})

      return (
        <PostForm
        action={action}
        updateRoute={updateRoute}
        fetch={fetch}
        newRecordKey={newRecordKey}
        redirectRoute={redirectRoute}
        formName={formName}
        formFields={formFields}
        relatedRecords={relatedRecords}
        initialState={initialState}
        includeImageUpload={includeImageUpload}
        />
      )
    }

    return null
  }
}
