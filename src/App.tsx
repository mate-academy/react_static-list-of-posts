import React from 'react';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PreparedPost } from './types/PreparedPost';

import { PostList } from './components/PostList';

import './App.scss';

const preparedPosts: PreparedPost[] = posts.map((post) => {
  const postCopy = {
    ...post,
    user: users.find(user => post.userId === user.id) || null,
    comments: comments.filter(comment => comment.postId === post.id),
  };

  return postCopy;
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__heading">Static list of posts</h1>
    <PostList postList={preparedPosts} />
  </div>
);

export default App;
