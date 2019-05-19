import React from 'react';
import { withRouter } from 'react-router';


class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { dname: '', password: '' };
    this.renderErrors = this.renderErrors.bind(this)
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
      this.props.updateRoute('/')
    })
  }

  renderErrors() {
    return(
      this.props.errors.map((error) => (
          <div>
            {error}
          </div>
        ))
    );
  }

  render () {
    return (
      <form className='session-form' onSubmit={this.handleSubmit}>
        {
          this.props.errors.length ?
          <div className='errors'>
          {this.renderErrors()}
          </div> :
          <div></div>
        }
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
