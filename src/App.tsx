import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

const getComments = (id: number) => (commentsFromServer
  .filter(comment => comment.postId === id)
);

const getUser = (userId: number) => (usersFromServer
  .find(user => user.id === userId)
);

export const posts = postsFromServer.map(post => (
  {
    ...post,
    comments: getComments(post.id),
    user: getUser(post.userId),
  }
));

export const App: React.FC = () => (
  <section className="App">
    <PostList posts={posts} />
  </section>
);
