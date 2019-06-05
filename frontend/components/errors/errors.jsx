import React from 'react'
import { connect } from 'react-redux'
import { clearErrors } from '../../actions/errorsActions'

class Errors extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.props.clearErrors()
  }

  componentDidUpdate(prevProps) {
    if (this.props.errors.length && this.props.errors !== prevProps.errors) {
      window.scrollTo({
        top: this.ref.current.offsetTop, behavior: 'smooth'
      })
    }
  }

  render () {
    return (
      <div className='errors-container' ref={this.ref}>
        {
          this.props.errors.length ?
          <div className='errors'>
          {
            this.props.errors.map((error) => {
              return <div key={error}>{error}</div>
            })
          }
          </div> :
          <div></div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Errors)
