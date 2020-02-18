import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleUpClick() {

  }
  handleDownClick() {
    
  }

  render(props) {
    return (
      <div>
        <p>{this.props.username}</p>
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
        <h3>{this.props.tally}</h3>
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
