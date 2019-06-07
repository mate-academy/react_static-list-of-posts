import React, { Component } from 'react';
import PostList from './components/PostList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: props.posts,
      users: props.users,
      comments: props.comments
    };
  }

  render() {
    return (
      this.state.posts.length
      ? <PostList
        posts={this.state.posts}
        users={this.state.users}
        comments={this.state.comments} />
      : 'no posts'
    );
  }
}
