import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Comment } from './types/Comment';
import { User } from './types/User';
import { Post } from './types/Post';

import { PostList } from './components/PostList';

function getComments(id: number): Comment[] | null {
  const postComments
  = commentsFromServer.filter(comment => id === comment.postId);

  return postComments || null;
}

function getUser(id: number): User | null {
  const user = usersFromServer.find(userPost => id === userPost.id);

  return user || null;
}

export const postList: Post[] = postsFromServer.map(post => ({
  ...post,
  comments: getComments(post.id),
  user: getUser(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList postList={postList} />
  </section>
);
