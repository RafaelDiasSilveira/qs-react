import React from 'react';
import { shallow } from "enzyme";

import UserForm from '../../user/UserForm';
import { users } from "../fixtures/fixtures";

let wrapper, onSubmit;

beforeAll(() => {
  onSubmit = jest.fn;
  wrapper = shallow(<UserForm onSubmit={onSubmit} />);

});

describe('should render UserForm correctly', () => {
  test('with data', () => {
    const wrapper = shallow(
      <UserForm
        user={users[0]}
        onSubmit={onSubmit}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('without data', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('should set state correctly on input change', () => {
  test('when setting nome input', () => {
    const value = 'Teste do GG';

    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    });

    expect(wrapper.state('nome')).toBe(value);
  });

  test('when setting apelido input', () => {
    const value = 'Teste do GG';

    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });

    expect(wrapper.state('apelido')).toBe(value);
  });

  test('when setting telefone input', () => {
    const value = '(61) 98245-1511';

    wrapper.find('input').at(2).simulate('change', {
      target: { value }
    });

    expect(wrapper.state('telefone')).toBe(value);
  });

  test('when setting senha input', () => {
    const value = 'senhaSecreta';

    wrapper.find('input').at(3).simulate('change', {
      target: { value }
    });

    expect(wrapper.state('senha')).toBe(value);
  });

})

// TODO: Teste do submit do form e validação de dados

