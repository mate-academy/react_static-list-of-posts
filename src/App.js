import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

function App() {
  const preparedPost = posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    cmts: comments.filter(cmts => cmts.postId === post.id),
  }));

  return (
    <div className="App">
      <h1 className="app_title">Static list of posts</h1>

      <PostList
        objPosts={preparedPost}
      />
    </div>
  );
}

export default App;
