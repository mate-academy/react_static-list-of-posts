import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { Post } from '../types/Post';

const posts: Post[] = postsFromServer.map(post => {
  const postAuthor = usersFromServer
    .find(user => user.id === post.userId) || null;

  const postComments = commentsFromServer
    .filter(comment => comment.postId === post.id);

  return {
    ...post,
    user: postAuthor,
    comments: postComments.length ? postComments : null,
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
