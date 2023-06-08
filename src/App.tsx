import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { FullPost } from './types';
import { PostList } from './components/PostList';

const posts: FullPost[] = postsFromServer.map(post => {
  const user = usersFromServer.find(userFromServer => (
    userFromServer.id === post.userId
  ));
  const comments = commentsFromServer.filter(comment => (
    comment.postId === post.id
  ));

  return {
    ...post,
    user,
    comments,
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
