import React from 'react';
import './App.scss';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

const preparedPosts = postsFromServer.map(post => {
  const foundUser =
    usersFromServer.find(user => user.id === post.userId) || null;
  const foundComments = commentsFromServer.filter(
    comment => comment.postId === post.id,
  );

  return {
    ...post,
    foundUser,
    foundComments,
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList preparedPosts={preparedPosts} />
  </section>
);
