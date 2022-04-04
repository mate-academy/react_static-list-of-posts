import React from 'react';
import { Post } from './types';
import './App.scss';

import PostList from './PostList/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const App: React.FC = () => {
  const preparedPosts: Array<Post> = posts.map(e => {
    return {
      ...e,
      user: users.find(user => user.id === e.userId) || null,
      comments: comments.filter(comment => comment.postId === e.id) || null,
    };
  });

  return (
    <>
      <div className="App">
        <h1>Static list of posts</h1>
      </div>
      <PostList preparedPosts={preparedPosts} />
    </>
  );
};

export default App;
