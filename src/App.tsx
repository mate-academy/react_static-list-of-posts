import React from 'react';

import './App.scss';
import { Post } from './types/Post';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const preparedPosts = (allPosts: Post[]) => (
  allPosts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comm => comm.postId === post.id),
  }))
);

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList preparedPosts={preparedPosts(posts)} />
  </div>
);

export default App;
