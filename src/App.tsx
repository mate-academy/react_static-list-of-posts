import React from 'react';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

import { Post } from './components/Types/Types';

const preparedPosts = posts.map(post => (
  {
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: comments.filter(comment => comment.postId === post.id),
  }
));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <div className="postList">
      <PostList commonArr={preparedPosts as Post[]} />
    </div>
  </div>
);

export default App;
