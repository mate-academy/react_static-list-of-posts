import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

function getPostsById() {
  return postsFromServer.map(post => ({
    ...post,
    comments: commentsFromServer.filter(comment => (
      comment.postId === post.id
    )),
    user: usersFromServer.find(user => (
      user.id === post.userId
    )) || null,
  }));
}

const data = getPostsById();

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={data} />
  </section>
);
