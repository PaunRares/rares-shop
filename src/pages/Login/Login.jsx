import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { ReactComponent as Google } from '../../assets/icons/google.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import './Login.css'
import { connect } from 'react-redux';
import { loginUserFacebook, loginUserGoogle } from '../../redux/user/userAction';

class Login extends React.Component {

    componentDidUpdate(prevProps) {
        if (this.props.user !== prevProps.user) {
            this.props.history.push('/');
        }
    }

    render() {
        return(
            <div className="login-page">
                <Link to='/'>
                    <img src={Logo} alt="logo" className="mb-5"/>
                </Link>

                <h1 className="h2">Login</h1>
                <p>Alege providerul cu care vrei să vrei să te loghezi:</p>
                <div className="d-flex flex-column justify-content-center">
                    <button
                        className="btn btn-outline-dark d-flex align-items-center"
                        onClick={() => this.props.signInWithGoogle()}
                    >
                        <Google className="me-2"/>
                        <span className="text-nowrap">Loghează-te cu Google</span>
                    </button>
                    <button
                        className="btn btn-outline-dark d-flex align-items-center mt-3"
                        onClick={() => this.props.signInWithFacebook()}
                    >
                        <Facebook className="me-2"/>
                        <span className="text-nowrap">Loghează-te cu Facebook</span>
                    </button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signInWithGoogle: () => dispatch(loginUserGoogle()),
        signInWithFacebook: () => dispatch(loginUserFacebook())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);