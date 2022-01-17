import React from 'react';
import './App.scss';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';
import { PreparedPost } from './Types/Types';

const preparedPosts: PreparedPost[] = posts.map((post) => {
  const correctUser = users.find((user) => (user.id === post.userId));

  const correctComments = comments.filter((comment) => (comment.postId === post.id));

  const preparedPost = {
    ...post,
    user: correctUser || null,
    comments: correctComments || null,
  };

  return preparedPost;
});

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
