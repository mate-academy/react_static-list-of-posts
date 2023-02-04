import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

const posts = postsFromServer.map(post => {
  const indexOfUser = usersFromServer
    .findIndex(user => user.id === post.userId);

  const commentsArr = commentsFromServer
    .filter(comment => comment.postId === post.id);

  return (
    {
      ...post,
      user: (indexOfUser !== -1) ? usersFromServer[indexOfUser] : null,
      comments: commentsArr,
    }
  );
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
