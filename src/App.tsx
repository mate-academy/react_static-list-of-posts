import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostTypes } from './types/PostTypes';

import { PostList } from './components/PostList';

const App: React.FC = () => {
  const preparedPosts: PostTypes[] = posts.map(post => {
    const currentUser = users.find(user => post.userId === user.id) || null;

    return {
      ...post,
      user: currentUser,
      comments: comments.filter(({ postId }) => postId === post.id),
    };
  });

  return (
    <div className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={preparedPosts} />
    </div>
  );
};

export default App;
