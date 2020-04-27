import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './PostList/PostList';

function App() {
  const resultPost = posts.map(post => ({
    ...post,
    comments: comments.filter(comment => comment.postId === post.id),
    user: users.find(user => user.id === post.userId),
  }));

  return (
    <div className="App">
      <PostList post={resultPost} />
    </div>
  );
}

export default App;
