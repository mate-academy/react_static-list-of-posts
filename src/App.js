import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

const prepearedListOfPosts = posts.map((post) => {
  const author = users.find(user => user.id === post.userId);
  const commentsOfPost = comments.filter(comment => comment.postId === post.id);

  return {
    ...post,
    author,
    commentsOfPost,
  };
});

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={prepearedListOfPosts} />
  </div>
);

export default App;
