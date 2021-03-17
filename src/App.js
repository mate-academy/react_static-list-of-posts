import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map((post) => {
  const postCopy = Object.assign({}, post);

  postCopy.user = users.find(user => postCopy.userId === user.id);
  postCopy.comments = comments.filter(coment => postCopy.id === coment.postId);

  return postCopy;
});

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <div>
      <PostList posts={preparedPosts} />
    </div>
  </div>
);

export default App;
