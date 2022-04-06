import React from 'react';
import { Post } from './types';
import './App.scss';

import PostList from './PostList/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts: Post[] = posts.map(post => {
  return {
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: comments.filter(comment => comment.postId === post.id),
  };
});

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <h1 className="title">Static list of posts</h1>
      </div>
      <PostList posts={preparedPosts} />
    </>
  );
};

export default App;
