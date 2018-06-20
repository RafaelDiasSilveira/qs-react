import React from 'react';
import { shallow } from 'enzyme';

import BookcaseNavigation from '../../bookcase/BookcaseNavigation';

test('should render BookcaseNavigation correctly', () => {
  const wrapper = shallow(<BookcaseNavigation />);

  expect(wrapper).toMatchSnapshot();
});
