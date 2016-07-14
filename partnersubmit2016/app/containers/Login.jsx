import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { manualLogin, redirectHome} from 'actions/users';
import styles from 'css/components/login';
import loadingGif from 'images/loading.gif';
import logo from 'images/logo.png';
import arrow from 'images/arrow.png';

const cx = classNames.bind(styles);

class Login extends Component {
  /*
   * This replaces getInitialState. Likewise getDefaultProps and propTypes are just
   * properties on the constructor
   * Read more here: https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es6-classes
   */
  constructor(props) {
    super(props);
    this.handleOnSubmit   = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const { manualLogin, user: { isLogin } } = this.props;
    const email = ReactDOM.findDOMNode(this.refs.email).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;
    if (isLogin) {
      manualLogin({ email, password });
    } 
  }
  renderHeader() {
    const { user: { isLogin, authenticated } } = this.props;
    console.log(authenticated);
    if (isLogin && authenticated == false) {
      return (
        <div className={cx('header')}>
          <h1 className={cx('heading')}> <img className={cx('img-logo')} src={logo} /></h1>
        </div>
      );
    }

  }

  render() {
    const { isWaiting, message, isLogin, authenticated } = this.props.user;
    return (
      <div className={cx('login', {
        waiting: isWaiting
      })}>

        <div className={cx('container')}>
          { this.renderHeader() }
          <img className={cx('loading')} src={loadingGif} />
          <p className ={cx('login-label')}>Please enter your email ID and log in password</p>
          <div className={cx('email-container')}>
            <form onSubmit={this.handleOnSubmit}>
              <input className={cx('input')}
              type="email"
              ref="email"
              placeholder="Email" />
              <input className={cx('input')}
              type="password"
              ref="password"
              placeholder="Password" />
              <p className={cx('message', {
                'message-show': message && message.length > 0
              })}>{message}</p>
              <input className={cx('blueButton')}
                type="submit"
                value='SUBMIT' />
            </form>
            <a href="mailto:michael.packiyaraj@target.com" className={cx('forgotpwd')}>Contact for password <img className={cx('arrow')} src={arrow} /></a>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  user: PropTypes.object,
  manualLogin: PropTypes.func.isRequired
};

// Function passed in to `connect` to subscribe to Redux store updates.
// Any time it updates, mapStateToProps is called.
function mapStateToProps({user}) {
  return {
    user
  };
}

// Connects React component to the redux store
// It does not modify the component class passed to it
// Instead, it returns a new, connected component class, for you to use.
export default connect(mapStateToProps, { manualLogin })(Login);

