import React from 'react';
import { PostList } from './components/PostList';
import { Post } from './types/Post';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const posts: Post[] = postsFromServer.map(post => {
  const userFound = usersFromServer.find(user => post.userId === user.id);
  const commentsFound = commentsFromServer
    .filter(comment => post.id === comment.postId);

  return {
    ...post,
    user: userFound || null,
    comments: commentsFound,
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
