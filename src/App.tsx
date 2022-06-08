import React from 'react';
import { ExtendedPost } from './types';
import { PostList } from './components/PostList/PostList';
import './App.scss';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts: ExtendedPost[] = posts.map(post => {
  return {
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: comments.filter(comment => comment.postId === post.id),
  };
});

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
