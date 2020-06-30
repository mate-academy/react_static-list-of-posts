import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const App = () => {
  const preparedList = posts.map(post => ({
    post: { ...post },
    user: { ...users.find(user => post.userId === user.id) },
    commentList: comments.filter(c => c.postId === post.id),
  }));

  return (
    <div className="App">
      <h1>Static list of posts</h1>
      <p>
        <span>posts: </span>
        <PostList preparedList={preparedList} />
      </p>
    </div>
  );
};

export default App;
