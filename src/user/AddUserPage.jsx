import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addUser } from './UserAction';
import UserForm from './UserForm';

export class AddUserPage extends React.Component {
  addUser = (user) => {
    this.props.onSubmit(user);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Criar usuário</h2>
        <UserForm
          onSubmit={this.addUser}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: user => dispatch(addUser(user)),
});

AddUserPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(undefined, mapDispatchToProps)(AddUserPage);
