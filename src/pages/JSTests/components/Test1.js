import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Test1() {
    const [error, setError] = useState(false)
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")

    const handleChange = e => {
        setError("")
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!input) return setError("Empty input not allowed.")
        const array = input.split(',')
        const revarray = array.reverse()
        setOutput(revarray.toString())
    }

    return (
        <Row className="e-test">
            <Col>
                <Form onSubmit={handleSubmit}>
                    <Form.Label>1. Create an input that accepts a a sequence of numbers and returns the input reversed  (eg. Input 1, 2, 3 would return 3, 2, 1).</Form.Label>
                    <Form.Group >
                        <Form.Control type="text" placeholder='ej. 1, 2, 7, 8' value={input} onChange={handleChange} aria-label="input-test1" />
                        <Button variant="primary" type="submit" aria-label="button-test1"> Convert </Button>
                    </Form.Group>
                    {error && <div className="e-input-error">{error}</div>}
                </Form>
                {output && <div className="e-output"><strong>Output: </strong>{output}</div>}
            </Col>
        </Row>
    )
}

export default Test1;
