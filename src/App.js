import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

const postsListAll = posts.map((post) => {
  const postComponent = { ...post };

  postComponent.user = users.find(user => user.id === post.userId);
  postComponent.comments = comments.filter(
    comment => comment.postId === post.id,
  );

  return postComponent;
});

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <PostList posts={postsListAll} />
  </div>
);

export default App;
