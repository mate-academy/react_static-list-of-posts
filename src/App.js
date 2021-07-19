import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const postsList = posts.map(
  post => ({
    ...post,
    user: users.find(human => (human.id === post.userId)),
    comments: comments.filter(comment => (comment.postId === post.id)),
  }),
);

const App = () => (
  <div className="App">
    <h1 className="title">Static list of posts</h1>
    <PostList postsList={postsList} />
  </div>
);

export default App;
