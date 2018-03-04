import React, { Component } from 'react';
import { Link } from 'react-router';

class NavigationBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand"> Red Dice</Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="signup"> <span className="glyphicon glyphicon-user"></span> SignUp</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;