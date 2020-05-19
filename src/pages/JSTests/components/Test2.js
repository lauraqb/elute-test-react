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
        setOutput(input.toUpperCase())
    }

    return (
        <Row className="e-test">
            <Col>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>2. Create an input that takes multiple strings and return them in uppercase.</Form.Label>
                        <Form.Control type="text" placeholder="Enter secuence" value={input} onChange={handleChange} />
                        {error && <div className="e-input-error">{error}</div>}
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Convert
                    </Button>
                </Form>
                {output && <div className="e-output">Output: {output}</div>}
            </Col>
        </Row>

    )
}

export default Test1;
