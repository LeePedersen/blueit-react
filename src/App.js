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
  }

  handleAddPost(newPost) {
    const newPosts = this.state.postList.slice();
    newPosts.push(newPost);
    this.setState({postList: newPosts});
  }

  render() {
    return (
      <div className="MainPage">
        <h1> THIS IS THE FRONT PÆGE </h1>
        <Navbar/>
        <Switch>
          <Route exact path='/' render={()=><PostList postList={this.state.postList} />} />
          <Route path='/newpost' render={()=><NewPost onNewPostCreation={this.handleAddPost} />} />
          <Route component={Ærror404} />
        </Switch>
      </div>
    );
  }

}

export default App;
