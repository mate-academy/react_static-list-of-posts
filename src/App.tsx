import React from 'react';

import './App.scss';
import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUserFromId(userId:number): User | null {
  const detectedUser = usersFromServer.find(user => user.id === userId);

  return detectedUser || null;
}

function getCommentsFromId(id: number): Comment[] {
  const detectedComments = commentsFromServer
    .filter(comment => comment.postId === id);

  return detectedComments;
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserFromId(post.userId),
  comments: getCommentsFromId(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
