import React, { Component } from 'react';
import { login } from '../components/actions/Loginaction';
import { connect } from 'react-redux';
import { Link,Navigate  } from 'react-router-dom';
import withNavigate from '../components/wrappers/LoginWrapper'

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      role: 'admin'
    };
  }
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, role } = this.state;
    const {login,navigate}=this.props;
    login({ email, password, role },navigate);

  }
  render() {
    const { isAuthenticated, user, loading, error } = this.props;
    // if (isAuthenticated) {
    //   const userId = user.id;
    //   if (user.role === 'admin') {
    //     return <Navigate to={`/admin/${userId}`} replace />;
    //   } else {
    //     return <Navigate to={`/user/${userId}`} replace />;
    //   }
    // }

    return (
      <div className='login-container'>
        <Link to='/'><button>Back</button></Link>
        <form onSubmit={this.handleSubmit}>

          <label>Email:</label>
          <input
            type='email'
            value={this.state.email}
            onChange={this.handleInputChange}
            name='email'
          />

          <label>Password:</label>
          <input
            type='password'
            value={this.state.password}
            onChange={this.handleInputChange}
            name='password'
          />
          <label >Role:</label>
          <select
            name="role"
            id="role"
            value={this.state.role}
            onChange={this.handleInputChange}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          <button type='submit'>Login</button>
        </form>
        {loading && <p>loading...</p>}
        {error && <p>Error: {error}</p>}
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  loading: state.login.loading,
  error: state.login.error,
  isAuthenticated: state.login.isAuthenticated,
  user: state.login.user
})

const mapDispatchToProps = (dispatch) => ({
  login :(userData,navigate) => dispatch(login(userData,navigate))
})


export default connect(mapStateToProps, mapDispatchToProps)(withNavigate(Login))
