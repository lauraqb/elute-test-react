import React from 'react'
import Container from 'react-bootstrap/Container'

import Test1 from './components/Test1'
import Test2 from './components/Test2'
import Test3 from './components/Test3'
import Test4 from './components/Test4'

function App() {
  return (
      <Container className="e-container">
          <Test1/>
          <Test2/>
          <Test3/>
          <Test4/>
      </Container>
  );
}

export default App;
