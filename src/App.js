import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const postWithUsersAndComments = posts.map((post) => {
  const postCopy = { ...post };

  const user = users.find(currentUser => currentUser.id === postCopy.userId);
  const postComments = comments.filter(comment => comment.postId === post.id);

  postCopy.user = user;
  postCopy.comments = postComments;

  return postCopy;
});

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <PostList posts={postWithUsersAndComments} />
  </div>
);

export default App;
