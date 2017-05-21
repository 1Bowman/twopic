import React, { Component } from 'react';
import { Col, Row, Thumbnail } from 'react-bootstrap';
import _ from 'lodash';
import VotingThumbnail from './VotingThumbnail'

// import { getRandomThumbnail } from './thumbnailUtil'
import * as firebase from 'firebase';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstThumbnail: {},
      secondThumbnail: {}
    }
  }

  componentDidMount() {
    // const rootRef = firebase.database().ref()
    // const thumbnailRef = rootRef.child('thumbnail')
    // const storageRef = firebase.storage().ref();
    // const fileName = '18121094_1499848123390827_3433065930687494666_o.jpg'
    // const spaceRef = storageRef.child(fileName)
    // this.setState({picPath: spaceRef.fullPath})
    // thumbnailRef.on('value', snap => {
    //   console.log('snapval', snap.val())
    //   _.map(snap.val(), childVal => {
    //     this.setState({peopleList: this.state.peopleList.concat(childVal)})
    //   })
    // })
    console.log('didmount', this.state.firstThumbnail)
    this.getRandomThumbnail()
  }

  getRandomThumbnail () {
    const rootRef = firebase.database().ref()
    const thumbnailRef = rootRef.child('thumbnail')

    let randomThumbnail1 = {}
    let randomThumbnail2 = {}

    // const storageRef = firebase.storage().ref();
    // const fileName = '18121094_1499848123390827_3433065930687494666_o.jpg'
    // const spaceRef = storageRef.child(fileName)
    // this.setState({picPath: spaceRef.fullPath})

    thumbnailRef.once('value', snap => {
      const thumbnailList = snap.val()
      const totalThumbnails = Object.keys(thumbnailList)

      randomThumbnail1 = thumbnailList[totalThumbnails[totalThumbnails.length ** Math.random() << 0]]
      do {
        randomThumbnail2 = thumbnailList[totalThumbnails[totalThumbnails.length ** Math.random() << 0]]
      } while (randomThumbnail1 === randomThumbnail2)

    }).then(() => {
      console.log('inside the .then')
      this.setState({
        firstThumbnail: randomThumbnail1,
        secondThumbnail: randomThumbnail2
      }, () => {console.log('finaly in the setstate', this.state.firstThumbnail)})
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
            <VotingThumbnail name={this.state.firstThumbnail.name} description={this.state.firstThumbnail.description} />
          </Col>
          <Col xs={6} mdPush={2} md={4}>
            <VotingThumbnail name={this.state.secondThumbnail.name} description={this.state.secondThumbnail.description} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
