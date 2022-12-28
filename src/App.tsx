import React from 'react';

import './App.scss';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { Post } from './types/post';

const getCommentsByPostId = (postId: number) => (
  commentsFromServer.filter(comment => (
    comment.postId === postId)));
const getAuthorbyId = (userId: number) => (
  usersFromServer.find(user => user.id === userId) || null
);
const fullPostInfo: Post[] = postsFromServer.map(post => (
  {
    ...post,
    author: getAuthorbyId(post.userId),
    comments: getCommentsByPostId(post.id),
  }
));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList
      postsList={fullPostInfo}
    />
  </section>
);
