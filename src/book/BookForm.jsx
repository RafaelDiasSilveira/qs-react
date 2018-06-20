import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

class BookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // codigo: props.book ? props.book.codigo : '',
      titulo: props.book ? props.book.titulo : '',
      autor: props.book ? props.book.autor : '',
      dataPublicacao: props.book ? moment(props.book.dataPublicacao) : moment(),
      // genero: props.book ? props.book.genero : '',
      // focused: false,
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

  onDateChange = (dataPublicacao) => {
    if (dataPublicacao) {
      this.setState(() => ({ dataPublicacao }));
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ focused }));
  }

  onSubmit = () => {

  };

  render() {
    // const { dataPublicacao } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>

          <div className="form-group">
            <input
              type="text"
              placeholder="Titulo"
              value={this.state.titulo}
              onChange={this.onTituloChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Autor"
              value={this.state.autor}
              onChange={this.onAutorChange}
              className="form-control"
            />
          </div>

          <div>
            <SingleDatePicker
              date={this.state.dataPublicacao}
              onDateChange={this.onDateChange}
              focused={this.state.focused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>

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
  }),
};

BookForm.defaultProps = {
  book: undefined,
};

export default BookForm;
