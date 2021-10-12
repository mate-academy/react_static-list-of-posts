import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { NewPosts } from './types/Types';
import { PostInfo } from './components/PostInfo/index';

const preparedPosts: NewPosts[] = posts.map(post => (
  {
    ...post,
    user: users.filter(user => user.id === post.userId) || null,
    comment: comments.filter(comment => comment.postId === post.id) || null,
  }
));

const App: React.FC = () => (
  <div className="App">
    <h1 className="MainTitle">Static list of posts</h1>
    <PostInfo newPosts={preparedPosts} />
  </div>
);

export default App;
