import React, { Component } from 'react';
import { Button, Col, Row, Thumbnail } from 'react-bootstrap';
import * as firebase from 'firebase';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'fuckboi'
    }
  }

  componentDidMount() {
    const rootRef = firebase.database().ref()
    console.log(rootRef.length)
  }

  render() {
    return (
      <div className="App">
        <Row>
          <Col xsPull={8}>
            <div>
              <h1>hello.</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6} mdPush={2} md={4}>
            <Thumbnail src="https://react-bootstrap.github.io/assets/thumbnaildiv.png" alt="242x200">
              <h3>good job {this.state.name}</h3>
              <Button>help</Button>
            </Thumbnail>
          </Col>
          <Col xs={6} mdPush={2} md={4}>
            <Thumbnail src="https://react-bootstrap.github.io/assets/thumbnaildiv.png" alt="242x200">
              <h3>good job boy</h3>
              <Button>help</Button>
            </Thumbnail>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
