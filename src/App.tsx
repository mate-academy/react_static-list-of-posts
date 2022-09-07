import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';
import { Comment } from './components/types/Comments';
import { User } from './components/types/User';
import { Post } from './components/types/Post';

import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import postsFromServer from './api/posts';

const getComments: (postId: number) => Comment[] = postId => commentsFromServer
  .filter(comment => comment.postId === postId);

function getUser(userId: number): User | null {
  const postUser = usersFromServer
    .find(user => user.id === userId);

  return postUser || null;
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  comments: getComments(post.id),
  user: getUser(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
