import React from 'react';

import './App.scss';

import { PostList } from './components/PostList/PostList';
import { Post } from './types/Post';

import postsServer from './api/posts';
import commentsServer from './api/comments';
import usersServer from './api/users';

const preparedPosts: Post[] = postsServer.map(post => ({
  ...post,
  user: usersServer.find(user => user.id === post.userId) || null,
  comments: commentsServer.filter(comment => comment.postId === post.id) || null,
}));

const App: React.FC = () => (
  <div className="app">
    <h1 className="app__title">Static list of posts</h1>
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
