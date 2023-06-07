import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { FullPostInfo } from './types/FullPostInfo';
import { PostList } from './components/PostList';

const posts: FullPostInfo[] = postsFromServer.map(post => {
  const user = usersFromServer.find(owner => owner.id === post.userId) || null;
  const comments = commentsFromServer
    .filter(comment => (
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
