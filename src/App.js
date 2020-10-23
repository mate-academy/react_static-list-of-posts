import React from 'react';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import './App.scss';
import { PostList } from './components/index';

const postsWithUsers = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
}));

const preparedPosts = postsWithUsers.map(post => ({
  ...post,
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <>
    <PostList posts={preparedPosts} />
  </>
);

export default App;
