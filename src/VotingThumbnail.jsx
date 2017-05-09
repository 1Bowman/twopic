import React, { Component } from 'react';
import { Button, Thumbnail } from 'react-bootstrap';
import _ from 'lodash';


class VotingThumbnail extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: this.props.name,
      description: this.props.description,
      picPath: 'https://react-bootstrap.github.io/assets/thumbnaildiv.png'
    }
  }

  render() {
    return (
      <div>
        <Thumbnail src={this.state.picPath}>
          <h3>{this.state.name}</h3>
          <p>{this.state.description}</p>
          <Button>vote4me</Button>
        </Thumbnail>
      </div>
    )
  }
}

export default VotingThumbnail;
