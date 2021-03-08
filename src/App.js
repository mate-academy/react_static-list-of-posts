import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './component/PostList';

const listOfData = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.userId),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <>
      <span>posts: </span>
      <PostList posts={listOfData} />
    </>
  </div>
);

export default App;
