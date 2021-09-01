import React from 'react';
import { PostList } from './components/PostList/PostList';
import { Post } from './types/Post/Post';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts: Post[] = posts.map(item => (
  {
    ...item,

    user: users.find(userItem => userItem.id === item.userId) || null,
    comments: comments.length
      ? comments.filter(commentItem => commentItem.postId === item.id)
      : null,
  }));

const App: React.FC = () => (
  <div className="App">
    <PostList content={preparedPosts} />
  </div>
);

export default App;
