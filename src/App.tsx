import React from 'react';
import { PostList } from './components/PostsList/PostList';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => {
  const user = users.find(person => person.id === post.userId) || null;
  const writtenComments = comments.filter(comment => comment.postId === post.id);

  return {
    ...post,
    user,
    writtenComments,
  };
});

export const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">
      Posts
    </h1>
    <PostList posts={preparedPosts} />
  </div>
);
