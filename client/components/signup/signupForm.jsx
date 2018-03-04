import React, { Component } from 'react';
import timeZone from '../../data/timeZone';
import map from 'lodash/map';
import classnames from 'classnames';

class SignupForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            timeZone: '',
            errors: {}
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
        this.setState({ errors: {} });
        e.preventDefault();
        this.props.userSignupRequest(this.state).then(
            () => { },
            ({ data }) => this.setState({ errors: data })
        );

    }
    render() {
        const options = map(timeZone, (val, key) =>
            <option key={val} value={val}>{key}</option>
        )

        const { errors } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join our community!</h1>
                <div className={classnames("form-group", { 'has-error': errors.username })}>
                    <label className="control-label">Username</label>
                    <input
                        value={this.state.username}
                        onChange={this.onChange}
                        type="text"
                        name="username"
                        className="form-control"
                    />
                    {errors.username && <span className="help-block">{errors.username}</span>}

                </div>
                <div className={classnames("form-group", { 'has-error': errors.email })}>
                    <label className="control-label">Email</label>
                    <input
                        value={this.state.email}
                        onChange={this.onChange}
                        type="text"
                        name="email"
                        className="form-control"
                    />
                    {errors.username && <span className="help-block">{errors.email}</span>}
                </div>
                <div className={classnames("form-group", { 'has-error': errors.password })}>
                    <label className="control-label">Password</label>
                    <input
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password"
                        name="password"
                        className="form-control"
                    />
                    {errors.username && <span className="help-block">{errors.password}</span>}
                </div>
                <div className={classnames("form-group", { 'has-error': errors.confirmPassword })}>
                    <label className="control-label">ConfirmPassword</label>
                    <input
                        value={this.state.confirmPassword}
                        onChange={this.onChange}
                        type="password"
                        name="confirmPassword"
                        className="form-control"
                    />
                    {errors.username && <span className="help-block">{errors.confirmPassword}</span>}
                </div>
                <div className={classnames("form-group", { 'has-error': errors.timeZone })}>
                    <label className="control-label">TimeZone</label>
                    <select
                        value={this.state.timeZone}
                        onChange={this.onChange}
                        name="timeZone"
                        className="form-control">
                        <option value="" disabled>Choose your timeZone</option>
                        {options}
                    </select>
                    {errors.username && <span className="help-block">{errors.timeZone}</span>}
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
SignupForm.propType = {
    userSignupRequest: React.PropTypes.func.isRequired
}
export default SignupForm;