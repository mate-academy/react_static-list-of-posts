import React from 'react';
import './App.scss';
import { StartPost, Post } from './types/posts';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { Comment } from './types/comments';

function getUser(postItem: StartPost) {
  const userItem = usersFromServer
    .find(userItemServer => userItemServer.id === postItem.userId);

  return userItem || null;
}

function getComments(postItem: StartPost): Comment[] {
  const commentsArr: Comment[] = commentsFromServer
    .filter(commentItem => commentItem.postId === postItem.id);

  return commentsArr;
}

const posts: Post[] = postsFromServer.map(postItem => ({
  ...postItem,
  user: getUser(postItem) || null,
  comments: getComments(postItem),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList postsItems={posts} />
  </section>
);
