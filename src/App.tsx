import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/Post';

function getUser(userId: number) {
  const listUser = usersFromServer.find(user => user.id
    === userId);

  return listUser || null;
}

function getComment(postId: number) {
  const listComment = commentsFromServer.filter(
    comment => (comment.postId === postId),
  );

  return listComment.length > 0 ? listComment : null;
}

const list: Post[] = postsFromServer.map(post => (
  {
    ...post,
    user: getUser(post.userId),
    comment: getComment(post.id),
  }
));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={list} />
  </section>
);
