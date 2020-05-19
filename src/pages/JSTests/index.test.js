import React from 'react'
import Test1 from './components/Test1'
import { render, fireEvent, screen } from '@testing-library/react'

test('Test 1 returns reverse correctly', () => {
    const utils = render(<Test1 />)
    const input = utils.getByLabelText('input-test1')
    expect(input.value).toBe('') 
    fireEvent.change(input, { target: { value: '1,2,3,4' } })
    expect(input.value).toBe('1,2,3,4') 
    fireEvent.click(screen.getByLabelText(/button-test1/i))
    expect(screen.getByText('4,3,2,1')).toBeInTheDocument()
  })