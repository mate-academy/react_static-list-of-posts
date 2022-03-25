import React from 'react';
import { Post } from './types/types';
import { PostList } from './components/PostList/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts: Post[] = posts.map(post => {
  return {
    ...post,
    user: users.find(person => person.id === post.userId || null),
    comment: comments.filter(comm => comm.postId === post.userId || null),
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
