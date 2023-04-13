import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { CompletePost } from './types/CompletePost';
import { User } from './types/User';
import { PostList } from './components/PostList';
import { Comment } from './types/Comment';

const getUser = (userId: number): User | null => {
  return usersFromServer
    .find(user => user.id === userId) || null;
};

const getComments = (postId: number): Comment[] => {
  return commentsFromServer
    .filter(comment => comment.postId === postId);
};

const posts: CompletePost[] = postsFromServer.map(
  post => ({
    ...post,
    user: getUser(post.userId),
    comments: getComments(post.id),
  }),
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <div className="PostList">
      <PostList posts={posts} />
    </div>
  </section>
);
