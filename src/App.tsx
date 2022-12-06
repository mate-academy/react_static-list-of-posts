import React from 'react';
import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUser(userId:number) {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComment(id:number) {
  const foundArrComment = commentsFromServer.filter(user => user.postId === id);

  return foundArrComment || null;
}

export const posts = postsFromServer.map(post => {
  return {
    ...post,
    user: getUser(post.userId),
    comments: getComment(post.id),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
