import React from 'react';
import PropTypes from 'prop-types';

class BookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // codigo: props.book ? props.book.codigo : '',
      titulo: props.book ? props.book.titulo : '',
      autor: props.book ? props.book.autor : '',
      // data_publicacao: props.book ? props.book.data_publicacao : '',
      // genero: props.book ? props.book.genero : '',
    };
  }

  onTituloChange = (e) => {
    const titulo = e.target.value;
    this.setState(() => ({ titulo }));
  };

  onAutorChange = (e) => {
    const autor = e.target.value;
    this.setState(() => ({ autor }));
  };

  onSubmit = () => {

  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>

          <input
            type="text"
            placeholder="Titulo"
            value={this.state.titulo}
            onChange={this.onTituloChange}
          />

          <input
            type="text"
            placeholder="Autor"
            value={this.state.autor}
            onChange={this.onAutorChange}
          />

        </form>
      </div>
    );
  }
}

BookForm.propTypes = {
  book: PropTypes.shape({
    titulo: PropTypes.string,
    autor: PropTypes.string,
  }),
};

BookForm.defaultProps = {
  book: undefined,
};

export default BookForm;
