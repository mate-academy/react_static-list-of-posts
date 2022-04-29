import React from 'react';
import { LinkedPost } from './types/LinkedPost';
import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const linkedPosts: LinkedPost[] = posts.map(post => (
  {
    ...post,
    user: users.find(({ id }) => id === post.userId) || null,
    comments: comments.filter(({ postId }) => postId === post.id),
  }
));

const App: React.FC = () => (
  <div className="App">
    <PostList posts={linkedPosts} />
  </div>
);

export default App;
