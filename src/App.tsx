import React from 'react';

import './App.scss';

import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './type/post';
import { Comment } from './type/comment';
import { User } from './type/user';

function searchUser(userId:number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function searchComments(id: number): Comment[] | null {
  const comments = commentsFromServer.filter(comment => comment.postId === id);

  return comments.length > 0 ? comments : null;
}

const allPost: Post[] = postsFromServer.map(post => ({
  ...post,
  user: searchUser(post.userId),
  comments: searchComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={allPost} />
  </section>
);
