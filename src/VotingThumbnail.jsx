import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
import _ from 'lodash';

class VotingThumbnail extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      description: '',
      picPath: 'https://react-bootstrap.github.io/assets/thumbnaildiv.png'
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.name !== nextProps.name){
      this.updateThumbnail(nextProps)
    }
  }

  updateThumbnail(nextProps) {
    console.log('updating', nextProps.name)
    this.setState({
      name: nextProps.name,
      description: nextProps.description,
    })
  }

  render() {
    return (
      <div>
        <Thumbnail src={this.state.picPath}>
          <h3>{this.state.name || 'loading'}</h3>
          <p>{this.state.description}</p>
        </Thumbnail>
      </div>
    )
  }
}

export default VotingThumbnail;
