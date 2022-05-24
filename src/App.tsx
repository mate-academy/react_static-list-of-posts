import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const preparedPosts = posts.map((post) => {
  const findUser = users.find((user) => user.id === post.userId);
  const findComments = comments.filter((comment) => comment.postId === post.id);

  return { ...post, user: findUser || null, comments: findComments || null };
});

// console.log(preparedPosts);

const App: React.FC = () => (
  <div className="App">
    <div className="container">
      <h1>Static list of posts</h1>
      <PostList postsList={preparedPosts} />
    </div>
  </div>
);

export default App;
