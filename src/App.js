import React from 'react';
import { PostList } from './components/PostList';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparePosts = posts.map(post => ({
  ...post,
  comments: comments.filter(comment => (
    post.id === comment.postId
  )),
  user: users.find(user => (
    post.userId === user.id
  )),
}));

const App = () => (
  <main className="pageContent">
    <h1>
      Post List
    </h1>
    <PostList posts={preparePosts} />
  </main>
);

export default App;
