import React, { Component } from 'react';
import timeZone from '../../data/timeZone';
import map from 'lodash/map';
import classnames from 'classnames';
import validateInput from '../../../Server/shared/validations/signup';
import TextFieldGroup from '../common/textfieldgroup';
import { browserHistory } from 'react-router';
class SignupForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            timeZone: '',
            errors: {},
            isLoading: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    isValid() {
        const { errors, isValid } = validateInput(this.state);
        if (!isValid) {
            this.setState({
                errors
            })
        }
        return isValid;
    }
    onSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({
                errors: {},
                isLoading: true
            });
            this.props.userSignupRequest(this.state).then(
                () => { browserHistory.push('/')},
                ({ data }) => this.setState({ errors: data, isLoading: false })
            );
        }
    }
    render() {
        const options = map(timeZone, (val, key) =>
            <option key={val} value={val}>{key}</option>
        )

        const { errors } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join our community!</h1>
                <TextFieldGroup
                    error={errors.username}
                    label="Username"
                    onChange={this.onChange}
                    value={this.state.username}
                    field="username"
                />
                <TextFieldGroup
                    error={errors.email}
                    label="Email"
                    onChange={this.onChange}
                    value={this.state.email}
                    field="email"
                />
                <TextFieldGroup
                    error={errors.password}
                    label="Password"
                    type="password"
                    onChange={this.onChange}
                    value={this.state.password}
                    field="password"
                />
                <TextFieldGroup
                    error={errors.confirmPassword}
                    label="ConfirmPassword"
                    type="password"
                    onChange={this.onChange}
                    value={this.state.confirmPassword}
                    field="confirmPassword"
                />
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
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
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