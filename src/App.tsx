import React from 'react';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { Post } from './types/Post';
import { PostList } from './components/PostList/PostList';

const preparedPosts: Post[] = posts.map(post => {
  return {
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: comments.filter(comment => comment.postId === post.id),
  };
});

const App: React.FC = () => (
  <div className="App">
    <div className="page">
      <h1 className="page__title">Static list of posts</h1>
      <PostList posts={preparedPosts} />
    </div>
  </div>
);

export default App;
