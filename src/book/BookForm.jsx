import React from 'react';
import PropTypes from 'prop-types';

class BookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titulo: props.book ? props.book.titulo : '',
      autor: props.book ? props.book.autor : '',
      dataPublicacao: props.book ? props.book.dataPublicacao : '',
      genero: props.book ? props.book.genero : '',
      errors: [],
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

    let validForm = true;
    let errors = [];

    // TODO: Fazer função para validação e função pra remover espaços duplos
    if (!this.state.titulo || this.state.titulo.length >= 20) {
      const error = 'Título inválido';
      errors = errors.concat(error);
    }

    if (errors.length > 0) {
      this.setState(() => ({ errors }));
      validForm = false;
    }

    if (validForm) {
      this.setState(() => ({ errors: [] }));
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

        { this.state.errors.length > 0 &&
          (
            <div className="alert alert-danger" role="alert">
              Erros encontrado:
              {this.state.errors}
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
                <option value=""> -- selecione uma opção -- </option>
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
    dataPublicacao: PropTypes.string,
    genero: PropTypes.string,
  }),
  onSubmit: PropTypes.func,
};

BookForm.defaultProps = {
  book: undefined,
  onSubmit: () => {},
};

export default BookForm;
