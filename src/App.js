import React from 'react';

import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';

import PostList from './components/PostList';

import './App.css';

function UnionList() {
  return posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    commentsList: comments.filter(comment => comment.postId === post.id),
  }));
}

const App = () => (
  <div className="App">
    <PostList posts={UnionList(posts, users, comments)} />
  </div>
);

export default App;
