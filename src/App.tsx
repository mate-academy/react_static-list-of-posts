import React from 'react';

// api data
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

// components
import { PostList } from './components/PostList';

// styles
import './App.scss';

const preparedPosts = posts.map(post => {
  return {
    ...post,
    user: users.find(user => user.id === post.id) || null,
    comments: comments.filter(comment => comment.postId === post.id) || [],
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 style={{ textAlign: 'center' }}>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
