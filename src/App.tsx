import React from 'react';

import { Post } from './types/Post';
import { PostList } from './components/PostList';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const userNotFound = {
  name: 'No ser',
  email: 'No email ',
};

export const App: React.FC = () => {
  const posts: Post[] = postsFromServer.map((post) => ({
    id: post.id,
    title: post.title,
    body: post.body,
    user: usersFromServer.find((u) => u.id === post.userId) || userNotFound,

    comments: commentsFromServer
      .filter((comment) => comment.postId === post.id)
      || [],
  }));

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
