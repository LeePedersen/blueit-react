import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPost(props) {
  let _username = null;
  let _title = null;
  let _content = null;
  function handleNewPostForm(event) {
    event.preventDefault();
    props.onNewPostCreation({username: _username.value, title: _title.value, content: _content.value, tally: 0, id: v4()});
    console.log(_username.value, _title.value, _content.value)
    _username.value = '';
    _title.value = '';
    _content.value = '';
  }
  return (
    <div>
      <form onSubmit={handleNewPostForm}>
        <input
          type='text'
          id='username'
          placeholder='Your Names'
          ref={(input) => {_username = input;}}/>
        <input
          type='text'
          id='title'
          placeholder='title of your post'
          ref={(input) => {_title = input;}}/>
        <input
          type='text'
          id='content'
          placeholder='Post content'
          ref={(input) => {_content = input;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

NewPost.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPost;
