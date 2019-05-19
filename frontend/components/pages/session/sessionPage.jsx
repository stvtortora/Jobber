import React from 'react'
import LoginForm from './loginFormContainer'
import RegisterForm from './registerFormContainer'

class SessionPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentForm: 'Login'
    }
  }

  updateForm (formType) {
    return () => {
      this.setState({currentForm: formType})
    }
  }


  render() {
    return (
      <div className='session-page'>
        <div className='session-form-header-container'>
          <div className='session-form-header-inner'>
            <span className='session-form-header'>Register / Login</span>
          </div>
        </div>
        <div className='session-form-container'>
          <div className='form-options'>
            <p onClick={this.updateForm('Register')} className={this.state.currentForm === 'Register' ? 'selected-session-option' : 'unselected-session-option'}>Register</p>
            <p onClick={this.updateForm('Login')} className={this.state.currentForm === 'Login' ? 'selected-session-option' : 'unselected-session-option'}>Login</p>
          </div>
          {this.state.currentForm === 'Login' ? <LoginForm formName='Login'/> : <RegisterForm formName='Register'/>}
        </div>
      </div>
    )
  }
}

export default SessionPage
