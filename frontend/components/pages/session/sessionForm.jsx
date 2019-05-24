import React from 'react';
import Errors from '../../errors/errors'
import { withRouter } from 'react-router';


class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { dname: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update (field) {
    return e => this.setState({
        [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => {
      this.props.updateRoute('/user-dashboard')
    })
  }

  render () {
    return (
      <form className='session-form' onSubmit={this.handleSubmit}>
        <Errors/>
        <div className='form-field'>
          <label>Username</label>
          <input type="text" value={this.state.username} onChange={this.update('dname')}/>
        </div>
        <div className='form-field'>
          <label>Password</label>
          <input type="password" value={this.state.password} onChange={this.update('password')}/>
        </div>
        <div className='session-submit-container'>
          <button type='submit'>{this.props.formName}</button>
        </div>
      </form>
    )
  }
}

export default SessionForm;
