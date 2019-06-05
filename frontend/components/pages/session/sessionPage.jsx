import React from 'react'
import LoginForm from './loginFormContainer'
import RegisterForm from './registerFormContainer'
import TitleHeader from '../../header/titleHeader'
import { connect } from 'react-redux'
import { logout } from '../../../actions/sessionActions'

class SessionPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentForm: 'Register'
    }
    this.header = this.header.bind(this)
    this.form = this.form.bind(this)
  }

  updateForm (formType) {
    return () => {
      this.setState({currentForm: formType})
    }
  }

  header() {
    return (
      <TitleHeader
      message={'Register / Login'}
      additionalData={
        {
          message: 'You are already logged in.',
          buttonText: 'Logout',
          buttonAction: () => logout(currentUser),
          useData: Boolean(currentUser)
        }
      }/>
    )
  }

  form() {
    return (
      <div className='session-form-container'>
        <div className='form-options'>
          <p onClick={this.updateForm('Register')} className={this.state.currentForm === 'Register' ? 'selected-session-option' : 'unselected-session-option'}>Register</p>
          <p onClick={this.updateForm('Login')} className={this.state.currentForm === 'Login' ? 'selected-session-option' : 'unselected-session-option'}>Login</p>
        </div>
        {this.state.currentForm === 'Login' ? <LoginForm formName='Login'/> : <RegisterForm formName='Register'/>}
      </div>
    )
  }

  render() {
    const { currentUser, logout } = this.props

    return (
      <div className='session-page'>
        {this.header()}
        { currentUser ? <div/> : this.form() }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: (currentUser) => dispatch(logout(currentUser))
  }
}

export default connect(mapStateToProps)(SessionPage)
