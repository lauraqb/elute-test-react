import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Test2() {
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
        setOutput(input.toUpperCase())
    }

    return (
        <Row className="e-test">
            <Col>
                <Form onSubmit={handleSubmit}>
                    <Form.Label>2. Create an input that takes multiple strings and return them in uppercase.</Form.Label>
                    <Form.Group>
                        <Form.Control type="text" placeholder='ej. foo bar' value={input} onChange={handleChange} />
                        <Button variant="primary" type="submit"> Convert </Button>
                    </Form.Group>
                    {error && <div className="e-input-error">{error}</div>}
                </Form>
                {output && <div className="e-output"><strong>Output: </strong> {output}</div>}
            </Col>
        </Row>

    )
}

export default Test2
