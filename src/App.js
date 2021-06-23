import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const base = [...posts];

// eslint-disable-next-line no-restricted-syntax
for (const item of base) {
  item.user = users.find(user => item.userId === user.id);
  item.commentList = comments.filter(comment => item.id === comment.postId);
}

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <div className="post-list">
      <PostList twits={base} />
    </div>
  </div>
);

export default App;
