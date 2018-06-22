import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UserForm from './UserForm';

class AddUserPage extends React.Component {
  addBook = (book) => {
    this.props.onSubmit(book);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Criar usuário</h2>
        <UserForm />
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   onSubmit: book => dispatch(addBook(book)),
// });

AddUserPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default AddUserPage;
