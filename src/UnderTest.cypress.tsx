import React from 'react';
import { mount } from '@cypress/react18';
import UnderTest from './UnderTest';

describe('UnderTest component', () => {
  it('renders correctly', () => {
    mount(<UnderTest value={undefined} />);
  });
});
