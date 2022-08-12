import React from 'react';
import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';

import { PostList } from './components/PostList';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getCommentList(postId:number):Comment[] | null {
  let commentList: Comment[] = [];

  commentList = commentsFromServer.filter(comment => (
    comment.postId === postId
  ));

  return commentList || null;
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  commentList: getCommentList(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
