import React from 'react'
import { Link } from 'react-router-dom'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      form: this.props.match.params.type
    }
  }
  render () {
    let formProps = {}
    switch (this.state.form) {
      case 'login':
        formProps = {
          header: 'Login',
          description: '',
          form: <Login />
        }
        break
      case 'signup':
        formProps = {
          header: 'Signup',
          description: 'Get an awesome free account!',
          form: <Signup />
        }
        break
      case 'forgot':
        formProps = {
          header: 'Forgot',
          description: 'Recover account password',
          form: <Forgot />
        }
        break
      default:
    }
    return (
      <div className='ui one column text container reactPage grid'>
        <div className='column' style={{maxWidth: '437px'}}>
          <div className='ui stacked center aligned segment' >
            <h2 className='ui teal header'>
              <div className='content'>
                {formProps.header}
                <div className='sub header'>
                  {formProps.description}
                </div>
              </div>
            </h2>
            <div className='ui divider' />
            {formProps.form}
          </div>
          <div className='ui mini message'>
            <div className='header'>New to IMDbnator? </div>
            <p><Link to='/form/signup'>Sign Up</Link> | <Link to='/form/forgot'>Forgot Password</Link></p>
          </div>
        </div>
      </div>
    )
  }
}

function Login (props) {
  return (
    <form className='ui form'>
      <div className='field'>
        <div className='ui left icon input'>
          <i className='user icon' />
          <input type='text' name='email' placeholder='Username or Email address' defaultValue='email@email.com' />
        </div>
      </div>
      <div className='field'>
        <div className='ui left icon input'>
          <i className='lock icon' />
          <input type='password' name='password' placeholder='Password' defaultValue='xj6360' />
        </div>
      </div>
      <div className='ui fluid large teal submit button'>Login</div>
      <div className='ui horizontal divider'>
        OR
      </div>
      <div className='ui social facebook button'>
        <i className='facebook icon' /> Facebook
      </div>
      <div className='ui social google plus button'>
        <i className='google plus icon' /> Google
      </div>
      <div className='ui twitter button'>
        <i className='twitter icon' /> Twitter
      </div>
    </form>
  )
}

function Signup (props) {
  return (
    <form className='ui form'>
      <div className='field'>
        <div className='ui left icon input'>
          <i className='user icon' />
          <input type='text' name='username' placeholder='Username' defaultValue='skd' />
        </div>
      </div>
      <div className='field'>
        <div className='ui left icon input'>
          <i className='mail icon' />
          <input type='text' name='email' placeholder='Email address' defaultValue='geththis@gmail.com' />
        </div>
      </div>
      <div className='field'>
        <div className='ui left icon input'>
          <i className='lock icon' />
          <input type='password' name='password' placeholder='Password' defaultValue='blahlord' />
        </div>
      </div>
      <div className='ui fluid large teal submit button'>Signup</div>
      <div className='ui horizontal divider'>
        OR
      </div>
      <div className='ui social facebook button'>
        <i className='facebook icon' /> Facebook
      </div>
      <div className='ui social google plus button'>
        <i className='google plus icon' /> Google
      </div>
    </form>
  )
}

function Forgot (props) {
  return (
    <form className='ui form'>
      <div className='field'>
        <div className='ui left icon input'>
          <i className='user icon' />
          <input type='text' name='email' placeholder='Username or Email address' />
        </div>
      </div>
      <div className='ui fluid teal button'>Email Instructions</div>
    </form>
  )
}
