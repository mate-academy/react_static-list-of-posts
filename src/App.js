import React from 'react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/postList/PostList';

function mergeData() {
  return posts.map(post => (
    {
      ...post,
      user: users.find(user => user.id === post.userId),
      comments: comments.filter(comment => comment.postId === post.id),
    }));
}

const postWithMeta = mergeData();

const App = () => (
  <div className="App">
    <PostList postData={postWithMeta} />
  </div>
);

export default App;
