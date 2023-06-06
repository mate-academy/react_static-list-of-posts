import React from 'react';
import postsFromServer from './api/posts';
import usersFromServer from './api/users';
import commentsFromServer from './api/comments';
import './App.scss';
import { User } from './types/User';
import { Post } from './types/Post';
import { PostList } from './components/PostList';
import { Comments } from './types/Comments';

function getUserById(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getCommentsById(postId: number): Comments[] {
  return (commentsFromServer
    .filter(comment => postId === comment.postId));
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  comments: getCommentsById(post.id),
  user: getUserById(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
