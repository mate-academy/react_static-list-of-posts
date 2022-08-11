import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

const readyPost = postsFromServer.map(post => {
  const commentsForPost = commentsFromServer.filter(comment => (
    comment.postId === post.id
  ));
  const userPosts = usersFromServer.find(user => (
    user.id === post.userId
  ));

  return {
    ...post,
    user: userPosts || null,
    comments: commentsForPost,
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={readyPost} />
  </section>
);
