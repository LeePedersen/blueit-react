import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tally: this.props.tally
    };
    this.handleUpClick = this.handleUpClick.bind(this);
    this.handleDownClick = this.handleDownClick.bind(this);
  }

  handleUpClick() {
    let newTally = this.state.tally;
    newTally += 1;
    this.setState({tally: newTally});
  }

  handleDownClick() {
    let newTally = this.state.tally;
    newTally -= 1;
    this.setState({tally: newTally});
  }

  render(props) {
    return (
      <div>
        <p>{this.props.username}</p>
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
        <h3>{this.state.tally}</h3>
        <button onClick={this.handleUpClick}>Like</button>
        <button onClick={this.handleDownClick}>Dislike</button>
      </div>
    );
  }
}


Post.propTypes = {
  username: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  tally: PropTypes.number
};

export default Post;
