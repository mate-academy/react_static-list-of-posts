import React from 'react';

import './App.css';
import PostList from './components/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparePosts = (pos, us, comm) => pos.map(post => ({
  ...post,
  user: { ...us.find(user => user.id === post.userId) },
  comments: comm.filter(comment => comment.postId === post.id),
}));

const App = () => {
  const fullPosts = preparePosts(posts, users, comments);

  return (
    <>
      <h1>Static list of posts</h1>
      <PostList posts={fullPosts} />
    </>
  );
};

export default App;
