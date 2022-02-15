import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { Post, User, Comment } from './types';
import { PostInfo } from './components/PostInfo/PostInfo';

const preparedPosts = posts.map((post: Post) => {
  const postCopy: Post = { ...post };

  postCopy.user = users
    .find((user: User) => user.id === postCopy.userId);

  postCopy.comments = comments
    .filter((comment: Comment) => comment.postId === postCopy.userId);

  return postCopy;
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">
      Static list of posts
    </h1>
    <div className="post-wrapper">
      <PostInfo posts={preparedPosts} />
    </div>
  </div>
);

export default App;
