import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Button from './index'

test("Sholud not allowed click button if isDisable is present", () => {
    const { container } = render(<Button isDisabled></Button>)
    expect(container.querySelector('span.disabled')).toBeInTheDocument()
})

test("Sholud render loading/spinner", () => {
    const { container, getByText } = render(<Button isLoading></Button>)
    expect(getByText(/loading/i)).toBeInTheDocument()
    expect(container.querySelector('span')).toBeInTheDocument()
})

test("Sholud render <a> tag", () => {
    const { container } = render(<Button type="link" isExternal></Button>)
    expect(container.querySelector("a")).toBeInTheDocument();
});

test("Sholud render <Link> component", () => {
    const { container } = render(<Router><Button href="" type="link"></Button></Router>)
    expect(container.querySelector("a")).toBeInTheDocument();
});