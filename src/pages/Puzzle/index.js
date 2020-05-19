import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Puzzle() {
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
        const newArray = []
        let previous
        array.forEach(number => {
          if(number !== previous) {
            newArray.push(number)
            previous = number
          }
          else {
            newArray.push(number)
            newArray.push("Snap")
          }
        })
        setOutput(newArray.toString())
    }
  return (
      <Container className="e-container">
        <h2>Puzzle</h2>
        <Row>
          <Col>
            <div className="e-description">Create something that accepts a sequence of digits and looks for 2 consequetive numbers. When found write 'Snap', else print out the number (e.g. 1, 3, 5, 5, 'Snap').</div>
            <Form onSubmit={handleSubmit}>
                <Form.Group >
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
      </Container>
  )
}

export default Puzzle
