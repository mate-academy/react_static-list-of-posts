import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const posts = postsFromServer
  .map(post => (
    {
      ...post,
      user: usersFromServer.find(user => user.id === post.userId) || null,
      comments: commentsFromServer.filter(comment => (
        comment.postId === post.id
      )),
    }
  ));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList
      posts={posts}
    />
  </section>
);
