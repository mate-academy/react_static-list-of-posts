import React from 'react';

import './App.scss';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/postList/PostList';

const preparedPosts = posts.map(post => ({
  user: users.find(person => person.id === post.id) || null,
  comment: comments.filter(commentNeeded => commentNeeded.postId === post.id) as Comment[],
  ...post,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
