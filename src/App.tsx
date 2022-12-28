import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './types/post';

import { PostList } from './components/PostList';

const posts: Post[] = postsFromServer.map(post => {
  const getUserById = usersFromServer
    .find(postOwner => postOwner.id === post.userId)
  || null;
  const getCommentsById = commentsFromServer.filter(comment => {
    return post.id === comment.postId;
  });

  return {
    ...post,
    user: getUserById,
    comments: getCommentsById,
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
