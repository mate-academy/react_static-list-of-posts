import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

export const App: React.FC = () => {
  const postsData = postsFromServer.map(post => ({
    userId: post.userId,
    id: post.id,
    title: post.title,
    user: usersFromServer.find(user => user.id === post.userId) || null,
    body: post.body,
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
  }));

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList postData={postsData} />
    </section>
  );
};
