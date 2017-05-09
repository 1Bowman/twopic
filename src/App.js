import React, { Component } from 'react';
import { Col, Row, Thumbnail } from 'react-bootstrap';
import _ from 'lodash';
import VotingThumbnail from './VotingThumbnail'
import * as firebase from 'firebase';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      peopleList: [],
      picPath: ''
    }
  }

  componentDidMount() {
    const rootRef = firebase.database().ref()
    const thumbnailRef = rootRef.child('thumbnail')

    // const storageRef = firebase.storage().ref();
    // const fileName = '18121094_1499848123390827_3433065930687494666_o.jpg'
    // const spaceRef = storageRef.child(fileName)

    // this.setState({picPath: spaceRef.fullPath})

    thumbnailRef.on('value', snap => {
      console.log('snapval', snap.val())
      _.map(snap.val(), childVal => {
        this.setState({peopleList: this.state.peopleList.concat(childVal)})
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Row>
          <Col>
            <div>
              <h1>hello.</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6} mdPush={2} md={4}>
            <a onClick={() => console.log('clicked1')}>
              <VotingThumbnail name="billy billy" description="not really" />
            </a>
          </Col>
          <Col xs={6} mdPush={2} md={4}>
            <a onClick={() => console.log('clicked2')}>
              <VotingThumbnail name="chester" description="chester" />
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
