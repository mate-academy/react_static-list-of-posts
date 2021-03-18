import React from 'react';
import './App.scss';
import { PostList } from './components/PostList/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const commonPostsObject = posts.map(post => ({
  ...post,
  user: users.find(human => human.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={commonPostsObject} />
  </div>
);

export default App;
