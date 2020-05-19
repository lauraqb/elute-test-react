import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Loading from 'components/Loading'

function APITest1() {
    //const [loading, setLoading] = useState(false)
    const [data, setData] = useState("")
    const [loading, setLoading] = useState(false)

    async function fetchUrl() {
        setLoading(true)
        const response = await fetch('https://blockchain.info/ticker')
        const json = await response.json()
        setData(json)
        setLoading(false)
    }
    
    const handleClick = () => {
        fetchUrl()
        setInterval(fetchUrl, 5000)
    }

    const displayConcurrency = (country) => {
        if(data) {
            const countryData = data[country]
            return (
                <div>
                    <h4>{country}</h4>
                    <div>15m: {countryData['15m']}</div>
                    <div>last: {countryData.last}</div>
                    <div>buy: {countryData.buy}</div>
                    <div>sell: {countryData.sell}</div>
                    <div>symbol: {countryData.symbol}</div>
                </div>
            )
        }
    }

    return (
        <Row>
            
            {loading && <Loading/>}
            <Col>
                <div className="e-description">1. Fetch data from https://blockchain.info/ticker, and present the data from 2 of the currencies.</div>
                <div className="e-description">2. Refresh the data every 5 seconds</div>
                <Button variant="primary" onClick={handleClick}>
                    Fecth data
                </Button>

                {data && <div className="e-output">{displayConcurrency('USD')} {displayConcurrency('AUD')}</div>}
            </Col>
        </Row>
    )
}

export default APITest1;
