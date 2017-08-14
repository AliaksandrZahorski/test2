import React from 'react'
import renderer from 'react-test-renderer'
import App from './App'

jest.mock('./MyButton', () =>  'MyButton' )
jest.mock('./InputForm', () =>  'InputForm' )

describe('App', () => {
  it('renders correctly', () => {
    const app = renderer.create(
      <App />
    ).toJSON()
    expect(app).toMatchSnapshot()
  })
})
