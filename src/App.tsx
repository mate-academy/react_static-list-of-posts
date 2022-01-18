import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const preparedPosts: Posts[] = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id) || null,
  comments: comments.filter(comment => comment.postId === post.id) || null,
}));

const App: React.FC = () => {
  return (
    <div className="App">
      <PostList posts={preparedPosts} />
    </div>
  );
};

export default App;
