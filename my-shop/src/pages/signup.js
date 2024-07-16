import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {signup} from '../components/actions/Signupaction';
import { connect } from 'react-redux';

export class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            email:'',
            password:'',
            role:'admin'
        }
    }
    handleInputChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.username, this.state.email,"role", this.state.role);
        const {username,email,password,role}=this.state;
        this.props.signup({username,email,password,role});

    }
    render() {
        const {loading,error} = this.props;
        return (
            <div className='signup-container'>
                <Link to='/'><button>Back</button></Link>
                <form onSubmit={this.handleSubmit}>
                    <label>User Name:</label>
                    <input
                        type='text'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        placeholder='username'
                    />

                    <label>Email:</label>
                    <input
                        type='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        placeholder='Email'
                    />

                    <label>Password:</label>
                    <input
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        placeholder='password'
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

                    <button type='submit' disabled={loading}>Signup</button>
                </form>
                {loading && <p>loading...</p>}
                {error && <p>Error: {error}</p>}
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    loading:state.signup.loading,
    error: state.signup.error
})

const mapDispatchToProps = ()=>({
    signup
})

export default connect(mapStateToProps,mapDispatchToProps)(Signup)
