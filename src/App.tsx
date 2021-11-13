import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';
import { Post } from './types/Post';

const preparedPosts: Post[] = posts.map(post => {
  const currUser = users.find(user => user.id === post.userId);
  const currComments = comments.filter(comment => post.id === comment.postId);

  return {
    ...post,
    user: currUser,
    comments: currComments,
  };
});

const App: React.FC = () => (
  <div className="app">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
