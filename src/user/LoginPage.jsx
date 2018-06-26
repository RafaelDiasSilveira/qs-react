import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';
import { login } from '../utils/auth';

import getUsers from './UserSelectors';

export class LoginPage extends React.Component {
  loginUser = (user) => {
    login(user.apelido, user.senha, this.props.users);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Login</h2>
        <LoginForm
          onSubmit={this.loginUser}
        />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const users = getUsers(state.users);

  return {
    users,
  };
};

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  users: PropTypes.any.isRequired,
};

export default connect(mapStateToProps)(LoginPage);
