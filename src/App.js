import React from 'react';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map((post) => {
  const postCopy = { ...post };

  postCopy.user = users.find(person => person.id === post.userId);
  postCopy.comments = comments.filter(comment => comment.postId === post.id);

  return postCopy;
});

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
