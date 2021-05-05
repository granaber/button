// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Button from '../Button'
import './class.test.css'
const testMessage = 'Press HERE with TESTING'
test('shows the children', ()=>{
    
    const content = render(<Button >{testMessage}</Button>)

    content.getAllByText(testMessage)
    expect(content.container).toHaveTextContent('Press HERE with TESTING')
    expect(screen.queryByText(testMessage)).toHaveTextContent('TESTING')

})
test('Clicking the button calls events handler',()=>{
 
    const handler = jest.fn()
    const content = render(<Button  onClick={()=>{ handler(); console.log('TESTING!!')}}>{testMessage}</Button>)
    const button =content.getByText(testMessage)
    fireEvent.click(button)

    expect(handler.mock.calls).toHaveLength(1)
    expect(handler).toHaveBeenCalledTimes(1)
})
test('typeButton Defined',()=>{
 
    const content = render(<Button typeButton="alert">{testMessage}</Button>)
    const button =content.getByText(testMessage)
    expect(button).toHaveClass('btn-alert')

})
test('Componet to Disable',()=>{

    const content = render(<Button typeButton="alert" disabled={true}>{testMessage}</Button>)
    const button =content.getByText(testMessage)
    expect(button).toBeDisabled()
    
})
test('Componet Add class in button',()=>{

    const classNew = 'button-reaxio-200px-h100px'
    const content = render(<Button className={classNew} >{testMessage}</Button>)
    const contentClass=content.container.firstChild
    const button =content.getByText(testMessage)
    expect(button).toHaveClass(classNew)
    expect(contentClass).toHaveClass('button-reaxio-200px-h100px')

    
 })