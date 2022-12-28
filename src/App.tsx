import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Users } from './types/Users';
import { Comments } from './types/Comments';
import { Posts } from './types/Posts';
import { PostList } from './components/PostList';

function userById(userId: number): Users | null {
  const thisUser = usersFromServer.find(user => user.id === userId);

  return thisUser || null;
}

function commentsById(id: number): Comments[] | null {
  const comments = commentsFromServer.filter(comment => comment.postId === id);

  return comments || null;
}

const posts: Posts[] = postsFromServer.map(post => ({
  ...post,
  user: userById(post.userId),
  comments: commentsById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">
      Static list of posts
    </h1>
    <PostList posts={posts} />
  </section>
);
