import React from 'react';
import './App.css';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './Components/PostList/PostList';

const getCommentPostUsers = (comment, post, user) => {
  const newPost = post.map(item => (
    {
      ...item,
      user: user.filter(a => a.id === item.userId),
    }));

  return (newPost.map(item => (
    {
      ...item,
      comments: comment.filter(pos => pos.postId === item.id),
    })));
};

const App = () => (
  <div className="App">
    <PostList list={getCommentPostUsers(comments, posts, users)} />
  </div>
);

export default App;
