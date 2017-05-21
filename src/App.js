import React, { Component } from 'react';
import { Col, Row, Thumbnail } from 'react-bootstrap';
import _ from 'lodash';
import VotingThumbnail from './VotingThumbnail'
import * as firebase from 'firebase';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstThumbnail: {},
      secondThumbnail: {},
      allThumbnails: {}
    }
  }

  componentDidMount() {
    const rootRef = firebase.database().ref()
    const thumbnailRef = rootRef.child('thumbnail')

    thumbnailRef.once('value', snap => {
      const grabLocalThumbnails = snap.child('thumbnailList').val()
      this.setState({
        allThumbnails: grabLocalThumbnails
      }, () => {this.getRandomThumbnail()})
    })
  }

  getRandomThumbnail() {
    const makeValuesAnArray = _.keys(this.state.allThumbnails)
    const shuffledList = _.shuffle(makeValuesAnArray)

    this.setState({
      firstThumbnail: this.state.allThumbnails[shuffledList[0]],
      secondThumbnail: this.state.allThumbnails[shuffledList[1]]
    })
  }

  handleClick(clickedThumb){
    console.log(clickedThumb)
    this.getRandomThumbnail()
  }

  render() {
    return (
      <div className="App">
        <Row>
          <Col xs={3}>
            <div>
              <h1>two pic.</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6} mdPush={2} md={4}>
            <a onClick={() => this.handleClick(1)}>
              <VotingThumbnail name={this.state.firstThumbnail.name} description={this.state.firstThumbnail.description} />
            </a>
          </Col>
          <Col xs={6} mdPush={2} md={4}>
            <a onClick={() => this.handleClick(2)}>
              <VotingThumbnail name={this.state.secondThumbnail.name} description={this.state.secondThumbnail.description} />
            </a>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App;
