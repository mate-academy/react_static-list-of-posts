import React from 'react';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList';
import './App.css';

const preparePosts = posts.map((post) => {
  const postUser = users.find(user => user.id === post.userId);
  const postComent = comments.filter(comment => comment.postId === post.id);

  return {
    ...post, postUser, postComent,
  };
});

const App = () => (
  <div className="App">
    <PostList postList={preparePosts} />
  </div>
);

export default App;
