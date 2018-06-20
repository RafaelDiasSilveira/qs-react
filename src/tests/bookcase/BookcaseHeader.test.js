import React from 'react';
import { shallow } from 'enzyme';

import BookcaseHeader from '../../bookcase/BookcaseHeader';

test('should render BookcaseHeader correctly', () => {
  const wrapper = shallow(<BookcaseHeader />);

  expect(wrapper).toMatchSnapshot();
});
