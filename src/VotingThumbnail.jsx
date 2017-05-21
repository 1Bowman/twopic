import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
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

  componentWillReceiveProps(nextProps) {
    if(this.props.name !== nextProps.name){
      console.log('in the if', nextProps.name)
      this.updateThumbnail(nextProps)
    } else {
      console.log('help')
    }
  }

  updateThumbnail(nextProps) {
    console.log('updating', nextProps.name)
    this.setState({
      name: nextProps.name,
      description: nextProps.description,
    }, () => {console.log('mount', this.state)})
  }

  render() {
    return (
      <div>
        <a onClick={() => console.log('clicked', this.state.name)}>
          <Thumbnail src={this.state.picPath}>
            <h3>{this.state.name}</h3>
            <p>{this.state.description}</p>
          </Thumbnail>
        </a>
      </div>
    )
  }
}

export default VotingThumbnail;
