import React from 'react';

import './App.scss';

import PostList from './components/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const publishedPosts = posts.map(post => (
  {
    ...post,
    user: users.find(user => user.id === post.userId),
    commentsToPost: comments.filter(comment => comment.postId === post.id)
  }
));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={publishedPosts} />
  </div>
);

export default App;
