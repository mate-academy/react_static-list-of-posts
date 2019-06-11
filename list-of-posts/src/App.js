import React, { Component } from 'react';
import { posts, users, comments } from './components/data';
import PostList from './components/PostList';


export default class App extends Component {
  render() {
    return (
        <PostList users={users} comments={comments} posts={posts} />
    )
  }
}


