import React, {Component} from 'react';
import {posts} from './posts';
import Post from './components/Post';

class PostList extends Component {

  render() {
    const postItems = posts.map((post, i) => <Post id={post.id} key={i}/>);
    return (
      <div>
        <h1>Post List</h1>
        <div>{postItems}</div>
      </div>
    );
  }
}

export default PostList;
