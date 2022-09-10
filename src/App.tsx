import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';

function getCommentsById(postId: number):Comment[] {
  const userWithComment = commentsFromServer.filter(
    comment => postId === comment.postId,
  );

  return userWithComment || [];
}

function getUsersById(userId: number):User | null {
  const userWithPost = usersFromServer.find(user => user.id === userId);

  return userWithPost || null;
}

const posts: Post[] = postsFromServer.map(
  (post) => ({
    ...post,
    comments: getCommentsById(post.id),
    user: getUsersById(post.userId),
  }),
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
