import React, { Component } from 'react';
import SignupForm from './signupForm';
import { connect } from 'react-redux';
import {userSignupRequest} from '../../actions/signupActions';
class SignUpPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { userSignupRequest } = this.props
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignupForm userSignupRequest={userSignupRequest} />
                </div>
            </div>
        );
    }
}
SignUpPage.propType = {
    userSignupRequest: React.PropTypes.func.isRequired
}
export default connect(null, { userSignupRequest })(SignUpPage);