import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';
import { PreparedPosts } from './types/types';

const PreparedPost: PreparedPosts[] = posts.map((post) => {
  const postUser = users.find((person) => (person.id === post.userId));
  const commentsInPost = comments.filter((comment) => (comment.postId === post.id));

  return {
    user: postUser,
    comments: commentsInPost,
    ...post,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList postList={PreparedPost} />
  </div>
);

export default App;
