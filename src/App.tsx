import React from 'react';

import './App.scss';

import commentsFromServer from './api/comments';
import postsFromServer from './api/posts';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import type { PostWithDetails } from './types';

const posts: PostWithDetails[] = postsFromServer.map(post => {
  const user = usersFromServer.find(candidate => candidate.id === post.userId);

  if (!user) {
    throw new Error(`User with id ${post.userId} was not found`);
  }

  return {
    ...post,
    user,
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
