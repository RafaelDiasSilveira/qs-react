import React from 'react';
import { shallow } from 'enzyme';

import DashboardHeader from '../../dashboard/DashboardHeader';

test('should render DashboardHeader correctly', () => {
  const wrapper = shallow(<DashboardHeader />);

  expect(wrapper).toMatchSnapshot();
});
