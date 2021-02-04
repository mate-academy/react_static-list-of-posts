import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const App = () => {
  const listOfPosts = posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comment: comments.find(comment => comment.postId === post.id),
  }));

  return (
    <div className="App">
      <h1>Static list of posts</h1>
      <PostList listOfPosts={listOfPosts} />
    </div>
  );
};

export default App;
