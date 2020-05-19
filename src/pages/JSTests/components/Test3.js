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
        const wordsArray = input.split(" ")
        const counts = {};
        wordsArray.forEach((x) => { counts[x] = (counts[x] || 0)+1; })
        setOutput(counts)
    }

    return (
        <Row className="e-test">
            <Col>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>3. Given an input sentence, return the number of unique words (eg. "the cat jumped over the mat" => the->2, cat->1).</Form.Label>
                        <Form.Control type="text" placeholder="Enter secuence" value={input} onChange={handleChange} />
                        {error && <div className="e-input-error">{error}</div>}
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Convert
                    </Button>
                </Form>
                {output  &&  <div className="e-output">Output: </div>}
                {
                    Object.keys(output).map(function(key) {
                        return <li key={key}>{key} -> {output[key]}</li>
                    })               
                }
            </Col>
        </Row>

    )
}

export default Test1;
