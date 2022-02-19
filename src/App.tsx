/* eslint-disable no-console */
import React from 'react';
import comments from './api/comments';
import posts from './api/posts';
import users from './api/users';

import { PostList } from './components/PostList/PostList';
import { Post } from './types/Post';

import './App.scss';

const preparedPosts: Post[] = posts.map(post => (
  {
    ...post,
    user: users.find(user => post.userId === user.id) || null,
    comment: comments.filter(comment => comment.postId === post.id),
  }
));

const App: React.FC = () => (
  <div className="App">
    <h1 className="post__main-title">Facebook (almost)</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
