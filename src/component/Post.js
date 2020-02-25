import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tally: this.props.tally
    };
  }

  render(props) {
    return (
      <div>
        <p>{this.props.username}</p>
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
        <h3>{this.props.tally}</h3>
        <button onClick={()=>this.props.onUpClick(this.props.id)}>Like</button>
        <button onClick={()=>this.props.onDownClick(this.props.id)}>Dislike</button>
      </div>
    );
  }
}


Post.propTypes = {
  username: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  onUpClick: PropTypes.func,
  onDownClick: PropTypes.func,
  id: PropTypes.string.isRequired,
  tally: PropTypes.number
};

export default Post;
