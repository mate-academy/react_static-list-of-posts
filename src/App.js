import React from 'react';
import './App.css';
import { PostList } from './components/PostList/PostList';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const postList = posts.map(post => ({
  ...post,
  comments: comments.filter(comment => comment.postId === post.id),
  user: users.find(person => person.id === post.userId),
}));

export const App = () => (
  <PostList posts={postList} />
);
