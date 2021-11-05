import React from 'react';
import { PostList } from './components/PostList';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => {
  const user = users.find(person => person.id === post.userId) || null;
  const userComments = comments.filter(comment => comment.postId === post.id);

  return { ...post, user, userComments };
});

export const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);
