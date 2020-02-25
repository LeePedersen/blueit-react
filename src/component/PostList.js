import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function PostList(props) {
  console.log(props)
  return (
    <div>
      {props.postList.map((post) =>
        <Post username={post.username}
          title={post.title}
          content={post.content}
          tally={post.tally}
          onUpClick={props.onUpClick}
          onDownClick={props.onDownClick}
          id={post.id}
          key={post.id}/>
      )}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
  onUpClick: PropTypes.func.isRequired,
  onDownClick: PropTypes.func.isRequired
};

export default PostList;
