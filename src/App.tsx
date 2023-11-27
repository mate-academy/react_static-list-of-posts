import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/Post';

function getUser(userId: number) {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function findComment(id: number) {
  const foundComment = commentsFromServer.filter(comment => (
    comment.postId === id));

  return foundComment;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: findComment(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <div className="PostList">
      <PostList posts={posts} />
    </div>
  </section>
);
