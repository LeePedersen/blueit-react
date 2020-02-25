import React from 'react';
import Navbar from './component/Navbar';
// import './App.css';
import PostList from './component/PostList';
import NewPost from './component/NewPost';
import Ærror404 from './component/Ærror404';
import { Link, Switch, Route } from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      postList: []
    };
    this.handleAddPost = this.handleAddPost.bind(this);
    this.handleUpClick = this.handleUpClick.bind(this);
    this.handleDownClick = this.handleDownClick.bind(this);
  }

  handleAddPost(newPost) {
    const newPosts = this.state.postList.slice();
    newPosts.push(newPost);
    this.setState({postList: newPosts});
  }

  handleUpClick(postId) {
    let newPostList = this.state.postList.slice();
    let currentPost = this.state.postList.filter(post => post.id === postId);
    currentPost[0].tally += 1;
    this.setState({postList: newPostList});
  }

  handleDownClick(postId) {
    let newPostList = this.state.postList.slice();
    let currentPost = this.state.postList.filter(post => post.id === postId);
    currentPost[0].tally -= 1;
    this.setState({postList: newPostList});
  }

  render() {
    return (
      <div className="MainPage">
        <h1> THIS IS THE FRONT PÆGE </h1>
        <Navbar/>
        <Switch>
          <Route exact path='/' render={()=><PostList postList={this.state.postList} onUpClick={this.handleUpClick} onDownClick={this.handleDownClick} />} />
          <Route path='/newpost' render={()=><NewPost onNewPostCreation={this.handleAddPost} />} />
          <Route component={Ærror404} />
        </Switch>
      </div>
    );
  }

}

export default App;
