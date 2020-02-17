import React from 'react';
import './App.css';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './api/components/PostList/PostList';

const preparedList = posts.map(post => ({
  ...post,
  user: users.find(person => person.id === post.userId),
  commentsList: comments.filter(item => post.id === item.postId),
}));

export default function App() {
  return (
    <div className="app">
      <h1>STATIC LIST OF POSTS</h1>
      <PostList posts={preparedList} />
    </div>
  );
}
