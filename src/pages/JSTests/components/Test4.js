import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

function Test4() {
    const [output, setOutput] = useState("")
    let reader

    const handleSelectedFile = (e) => {
        const file = e.target.files[0]
        reader = new FileReader()
        reader.onloadend = setOutputData
        reader.readAsText(file)
    }

    const setOutputData = () => {
        setOutput(reader.result)
    }

    return (
        <Row className="e-test">
            <Col>
                <Form>
                    <Form.Label>Test 4. Read a file and show the contents.</Form.Label>
                    <Form.File 
                        id="custom-file"
                        label="Custom file input"
                        custom
                        onChange = {handleSelectedFile}
                    />
                </Form>
                {output  && 
                    <div className="e-output">Output:
                        <div>{output}</div> 
                    </div>}
            </Col>
        </Row>

    )
}

export default Test4
