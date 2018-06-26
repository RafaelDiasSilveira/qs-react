import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// import { login } from '../utils/auth';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apelido: '',
      senha: '',
      errors: [],
    };
  }

  onApelidoChange = (e) => {
    const apelido = e.target.value;
    this.setState(() => ({ apelido }));
  };

  onSenhaChange = (e) => {
    const senha = e.target.value;
    this.setState(() => ({ senha }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      apelido: this.state.apelido,
      senha: this.state.senha,
    });
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

          <div className="form-group">
            <label>Apelido</label>
            <input
              type="text"
              placeholder="Apelido"
              value={this.state.apelido}
              onChange={this.onApelidoChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              className="form-control"
              value={this.state.senha}
              onChange={this.onSenhaChange}
            />
          </div>

          <button className="btn btn-success btn-lg btn-block">Login</button>

        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
  onSubmit: () => {},
};

export default (LoginForm);
