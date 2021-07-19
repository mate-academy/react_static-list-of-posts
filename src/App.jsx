import React from 'react';

import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const postsList = posts.map((post) => {
  const findUser = users.find(user => user.id === post.userId);
  const commentsList = comments.filter(comment => comment.postId === post.id);

  return {
    ...post,
    user: findUser,
    comments: commentsList,
  };
});

const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postsList} />
  </div>
);

export default App;
