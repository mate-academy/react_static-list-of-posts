import React from 'react';

import './App.scss';

import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';
import { PostList } from './components/PostList';

const preparedPosts = posts.map((post) => {
  const newPost = { ...post };

  newPost.user = users.find(user => post.userId === user.id);
  newPost.comments = comments.filter(comment => comment.postId === post.id);

  return newPost;
});

const App = () => (
  <div className="app">
    <h1 className="app__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
