import React from 'react';
import { PostList } from './components/PostList/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const postList = posts.map(post => ({
  ...post,
  comments: comments.filter(comment => comment.postId === post.id),
  user: users.find(person => person.id === post.userId),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <span>posts: </span>
    <PostList postList={postList} />
  </div>
);

export default App;
