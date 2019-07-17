import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from './PostList';

const foundPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => post.id === comment.postId),
}
));

function App() {
  return (
    <div className="all-info">
      <PostList
        posts={foundPosts}
      />
    </div>

  );
}

export default App;
