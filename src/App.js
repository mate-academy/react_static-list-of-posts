import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './commponents/PostList/PostList';

const postsFullInfo = posts.map((post) => {
  const commentsForPost = comments.filter(
    comment => comment.postId === post.id,
  );
  const user = users.find(
    uniqUser => uniqUser.id === post.userId,
  );

  return {
    ...post,
    commentsForPost,
    user,
  };
});

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={postsFullInfo} />
  </div>
);

export default App;
