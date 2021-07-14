import React from 'react';
import { PostList } from './components/PostList/PostList';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const postsList = posts.map((post) => {
  const postComponent = { ...post };

  postComponent.user = users.find(user => user.id === post.userId);
  postComponent.comments = comments
    .filter(comment => comment.postId === post.id);

  return postComponent;
});

const App = () => (
  <PostList postList={postsList} />
);

export default App;
