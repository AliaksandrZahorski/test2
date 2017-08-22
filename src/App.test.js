import React from 'react'
import renderer from 'react-test-renderer'
import App from './App'

jest.mock('./MyButton', () =>  {
  const React = require('react');
  const MyButton = props => React.createElement('MyButton', props, props.children);
  return MyButton;
});
jest.mock('./InputForm', () =>  'InputForm' )

describe('App', () => {
  it('renders correctly', () => {
    const app = renderer.create(
      <App />
    ).toJSON()
    expect(app).toMatchSnapshot()
  })
})
