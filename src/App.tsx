import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';
import { PostList } from './components/PostList';

function getUserById(userId: number): User | null {
  const founUser = usersFromServer.find(user => user.id === userId);

  return founUser || null;
}

function getCommentsById(id: number): Comment[] {
  const postComments = commentsFromServer
    .filter(comment => comment.postId === id);

  return postComments;
}

export const posts: Post[] = postsFromServer.map(post => {
  return {
    ...post,
    user: getUserById(post.userId),
    comments: getCommentsById(post.id),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
