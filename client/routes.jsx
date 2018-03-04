import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Greetings from './components/greetings';
import SignUpPage from './components/signup/signUpPage';
export default (
    <Route path="/" component={App} >
        <IndexRoute component={Greetings}></IndexRoute> 
        <Route path="signup" component={SignUpPage}></Route>
    </Route>
)