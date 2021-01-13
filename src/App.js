import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const preparedPosts = posts.map((post) => {
  const item = { ...post };
  const postUser = users.find(person => person.id === item.userId);
  const postComment = comments.filter(comment => comment.postId === item.id);

  item.name = postUser.name;
  item.email = postUser.email;
  item.address = { ...postUser.address };
  item.commenters = postComment;

  return item;
});

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList post={preparedPosts} />
  </div>
);

export default App;
