import React from 'react';
import { PostList } from './components/PostList/PostList';
import { Post } from './types/Post';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId) || null,
  comments: comments.length
    ? comments.filter(comment => comment.postId === post.id)
    : null,
}));

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
