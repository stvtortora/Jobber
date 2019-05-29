import React from 'react'
import { connect } from 'react-redux'
import { clearErrors } from '../../actions/errorsActions'

class Errors extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.clearErrors()
  }

  render () {
    return (
      <div className='errors-container'>
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
