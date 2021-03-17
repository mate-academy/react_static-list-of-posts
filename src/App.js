import React from 'react';
import './App.scss';
import { PostList } from './components/PostList/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const commonPostsObject = posts.map((post) => {
  const user = users.find(human => human.id === post.userId);
  const postCopy = Object.assign({}, post);
  const commentsToPost
   = comments.filter(comment => comment.postId === post.userId);

  return {
    user,
    postCopy,
    commentsToPost,
  };
});

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList props={commonPostsObject} />
  </div>
);

export default App;
