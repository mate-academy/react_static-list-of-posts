import React from 'react';

import './App.scss';

import PostList from './components/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preperedPosts = posts.map(post => {
  const user = users.find(person => person.id === post.userId) || null;
  const filteredComments = comments.filter(comment => comment.postId === post.id);

  return { ...post, user, filteredComments };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preperedPosts} />
  </div>
);

export default App;
