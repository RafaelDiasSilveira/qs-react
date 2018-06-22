import React from 'react';
import PropTypes from 'prop-types';

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: props.user ? props.user.nome : '',
      apelido: props.user ? props.user.apelido : '',
      telefone: props.user ? props.user.telefone : '',
      senha: props.user ? props.user.senha : '',
      errors: [],
    };
  }

  onNomeChange = (e) => {
    const nome = e.target.value;
    this.setState(() => ({ nome }));
  };

  onApelidoChange = (e) => {
    const apelido = e.target.value;
    this.setState(() => ({ apelido }));
  };

  onTelefoneChange = (e) => {
    const telefone = e.target.value;
    this.setState(() => ({ telefone }));
  }

  onSenhaChange = (e) => {
    const senha = e.target.value;
    this.setState(() => ({ senha }));
  }

  // onSubmit = (e) => {
  //   e.preventDefault();

  //   let validForm = true;
  //   let errors = [];

  //   // TODO: Fazer função para validação e função pra remover espaços duplos
  //   if (!this.state.titulo || this.state.titulo.length >= 20) {
  //     const error = 'Título inválido';
  //     errors = errors.concat(error);
  //   }

  //   if (errors.length > 0) {
  //     this.setState(() => ({ errors }));
  //     validForm = false;
  //   }

  //   if (validForm) {
  //     this.setState(() => ({ errors: [] }));
  //     this.props.onSubmit({
  //       titulo: this.state.titulo,
  //       autor: this.state.autor,
  //       dataPublicacao: this.state.dataPublicacao,
  //       genero: this.state.genero,
  //     });
  //   }
  // };

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
              <label>Nome</label>
              <input
                type="text"
                placeholder="Nome"
                value={this.state.nome}
                onChange={this.onNomeChange}
                className="form-control"
              />
            </div>

            <div className="col form-group">
              <label>Apelido</label>
              <input
                type="text"
                placeholder="Apelido"
                value={this.state.apelido}
                onChange={this.onApelidoChange}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="col form-group">
              <label>Telefone</label>
              <input
                type="text"
                placeholder="(XX) XXXXX-XXXX"
                className="form-control"
                value={this.state.telefone}
                onChange={this.onTelefoneChange}
              />
            </div>

            <div className="col form-group">
              <label>Senha</label>
              <input
                type="password"
                className="form-control"
                value={this.state.senha}
                onChange={this.onSenhaChange}
              />
            </div>
          </div>

          <button className="btn btn-success btn-lg btn-block">Cadastrar-se</button>

        </form>
      </div>
    );
  }
}

UserForm.propTypes = {
  user: PropTypes.shape({
    nome: PropTypes.string,
    apelido: PropTypes.string,
    telefone: PropTypes.string,
    senha: PropTypes.string,
  }),
  // onSubmit: PropTypes.func,
};

UserForm.defaultProps = {
  user: undefined,
  // onSubmit: () => {},
};

export default UserForm;
