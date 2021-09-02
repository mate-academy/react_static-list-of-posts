import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';
import { Post } from './types/Post';

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <div className="App__container">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={preparedPosts} />
    </div>
  </div>
);

export default App;
