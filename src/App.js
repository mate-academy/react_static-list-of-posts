import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

const postsListAll = posts.map((post) => {
  const postCopy = { ...post };

  postCopy.user = users.find(user => user.id === post.userId);
  postCopy.comments = comments.filter(
    comment => comment.postId === post.id,
  );

  return postCopy;
});

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <PostList posts={postsListAll} />
  </div>
);

export default App;
