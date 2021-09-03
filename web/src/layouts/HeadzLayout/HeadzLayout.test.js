import { render } from '@redwoodjs/testing'

import HeadzLayout from './HeadzLayout'

describe('HeadzLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeadzLayout />)
    }).not.toThrow()
  })
})
