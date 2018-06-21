import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import 'react-dates/initialize';
// import { SingleDatePicker } from 'react-dates';

class BookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titulo: props.book ? props.book.titulo : '',
      autor: props.book ? props.book.autor : '',
      dataPublicacao: props.book ? props.book.dataPublicacao : '',
      genero: props.book ? props.book.genero : '',
      error: '',
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

  onDateChange = (e) => {
    const dataPublicacao = e.target.value;
    this.setState(() => ({ dataPublicacao }));
  }

  onGeneroChange = (e) => {
    const genero = e.target.value;
    this.setState(() => ({ genero }));
  }

  onSubmit = (e) => {
    e.preventDefault();

    let error;

    if (!this.state.titulo) {
      error = 'Título inválido';
      this.setState(() => ({ error }));
    } else {
      this.props.onSubmit({
        titulo: this.state.titulo,
        autor: this.state.autor,
        dataPublicacao: this.state.dataPublicacao,
        genero: this.state.genero,
      });
    }
  };

  render() {
    return (
      <div>

        { this.state.error &&
          (
            <div className="alert alert-danger" role="alert">
              Erros encontrado:
              {this.state.error}
            </div>
          )
        }

        <form onSubmit={this.onSubmit}>

          <div className="form-row">
            <div className="col form-group">
              <label>Título</label>
              <input
                type="text"
                placeholder="Titulo"
                value={this.state.titulo}
                onChange={this.onTituloChange}
                className="form-control"
              />
            </div>

            <div className="col form-group">
              <label>Autor</label>
              <input
                type="text"
                placeholder="Autor"
                value={this.state.autor}
                onChange={this.onAutorChange}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="col form-group">
              <label htmlFor="generoSelect">
              Gênero
              </label>
              <select
                id="generoSelect"
                className="form-control"
                value={this.state.genero}
                onChange={this.onGeneroChange}
              >
                <option value="" disabled selected> -- selecione uma opção -- </option>
                <option value="epopeia">EPOPEIA</option>
                <option value="novela">NOVELA</option>
                <option value="conto">CONTO</option>
                <option value="ensaio">ENSAIO</option>
                <option value="romance">ROMANCE</option>
              </select>
            </div>

            <div className="col form-group">
              <label>Data de Publicação</label>
              <input
                type="date"
                className="form-control"
                value={this.state.dataPublicacao}
                onChange={this.onDateChange}
                defaultValue="31/12/18"
              />
            </div>
          </div>

          <button className="btn btn-success btn-lg btn-block">Adicionar Livro</button>

        </form>
      </div>
    );
  }
}

BookForm.propTypes = {
  book: PropTypes.shape({
    titulo: PropTypes.string,
    autor: PropTypes.string,
    dataPublicacao: PropTypes.instanceOf(moment),
    genero: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

BookForm.defaultProps = {
  book: undefined,
};

export default BookForm;
