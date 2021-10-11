import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(userObj => userObj.id === post.userId) || null,
  comments: comments.filter(comment => comment.postId === post.id) as Comment[],
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
