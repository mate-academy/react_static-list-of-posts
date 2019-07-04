import React from 'react';
import './App.css';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/Postlist';

const postWithUser = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <>
    <h1>Static list of posts</h1>
    <PostList posts={postWithUser} />
  </>
);

export default App;
