import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addBook } from './BookAction';
import BookForm from './BookForm';

export class AddBookPage extends React.Component {
  addBook = (book) => {
    this.props.onSubmit(book);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Adicionar livro</h2>
        <BookForm
          onSubmit={this.addBook}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: book => dispatch(addBook(book)),
});

AddBookPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(undefined, mapDispatchToProps)(AddBookPage);
