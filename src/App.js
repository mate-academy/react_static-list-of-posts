import React from 'react';
import './App.css';
import { PostList } from './components/PostList/PostList';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { AppShape } from './components/Shape';

export const App = () => {
  const post = posts.map(item => ({
    ...item,
    comments: comments.filter(comment => comment.postId === item.id),
    user: users.find(person => person.id === item.userId),
  }));

  return (
    <PostList posts={post} />
  );
};

App.propTypes = AppShape.isRequired;
