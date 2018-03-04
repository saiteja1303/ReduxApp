import React, { Component } from 'react';
import timeZone from '../../components/data/timeZone';
import map from 'lodash/map';
class SignupForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            timeZone: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);

    }
    render() {
        const options = map(timeZone, (val, key) => 
            <option key={val} value={val}>{key}</option>
        )
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join our community!</h1>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                        value={this.state.username}
                        onChange={this.onChange}
                        type="text"
                        name="username"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input
                        value={this.state.email}
                        onChange={this.onChange}
                        type="text"
                        name="email"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password"
                        name="password"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">ConfirmPassword</label>
                    <input
                        value={this.state.confirmPassword}
                        onChange={this.onChange}
                        type="password"
                        name="confirmPassword"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">TimeZone</label>
                    <select
                        value={this.state.timeZone}
                        onChange={this.onChange}
                        name="timeZone"
                        className="form-control">
                        <option value="" disabled>Choose your timeZone</option>
                        {options}

                    </select>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        SignUp
                    </button>
                </div>
            </form>
        );
    }
}

export default SignupForm;