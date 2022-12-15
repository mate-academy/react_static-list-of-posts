import React from 'react';
import './App.scss';
import { PostList } from './components/PostList';
import { User } from './types/user';
import { Post } from './types/post';
import { Comment } from './types/comment';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const getUserById = (userId: number): User | null => {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
};

const getCommentsById = (postId: number): Comment[] => {
  const foundComments = commentsFromServer
    .filter(comment => comment.postId === postId);

  return foundComments;
};

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
