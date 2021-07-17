import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const copyPosts = posts.map(post => Object.assign({}, post));

const fullPosts = copyPosts.map((post) => {
  const findComments = comments.filter(comment => comment.postId === post.id);
  const findUser = users.find(user => user.id === post.userId);

  return {
    ...post,
    comments: findComments,
    user: findUser,
  };
});

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={fullPosts} />
  </div>
);

export default App;
