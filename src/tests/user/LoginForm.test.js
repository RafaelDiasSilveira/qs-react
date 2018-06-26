import React from 'react';
import { shallow } from "enzyme";

import { LoginForm } from '../../user/LoginForm';
import { users } from "../fixtures/fixtures";

let wrapper, onSubmit;

beforeAll(() => {
  onSubmit = jest.fn;
  wrapper = shallow(<LoginForm onSubmit={onSubmit} />);

});

describe('should render LoginForm correctly', () => {
  test('with data', () => {
    const wrapper = shallow(
      <LoginForm
        onSubmit={onSubmit}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});

describe('should set state correctly on input change', () => {
  test('when setting apelido input', () => {
    const value = 'Teste do GG';

    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    });

    expect(wrapper.state('apelido')).toBe(value);
  });

  test('when setting senha input', () => {
    const value = 'Teste do GG';

    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });

    expect(wrapper.state('senha')).toBe(value);
  });

})

// TODO: Teste do submit do form e validação de dados

