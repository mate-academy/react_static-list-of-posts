import React from 'react';
import PostList from './components/PostList';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const infoPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <>
    <h1>Static list of posts</h1>
    <PostList posts={infoPosts} />
  </>
);

export default App;
