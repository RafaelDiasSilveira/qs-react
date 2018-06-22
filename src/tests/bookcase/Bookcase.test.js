import React from 'react';
import { shallow } from "enzyme";

import Bookcase from "../../bookcase/Bookcase";

test('should render Bookcase correctly', () => {
  const wrapper = shallow(<Bookcase />);

  expect(wrapper).toMatchSnapshot();
});
