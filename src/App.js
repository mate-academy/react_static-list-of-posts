import React from 'react';
import { PostList } from './components/PostList';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const unitedPost = posts.map(
  post => ({
    ...post,
    user: users.find(
      user => user.id === post.userId,
    ),
    comment: comments.find(
      comment => comment.postId === post.id,
    ),
  }),
);

const App = () => (
  <div className="accordion" id="accordionExample">
    <PostList posts={unitedPost} />
  </div>
);

export default App;
