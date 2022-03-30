import React from 'react';
import './App.scss';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import {
  Comment, Post, PreparedPost, User,
} from './types';
import { PostList } from './components/PostList';

function preparePosts(posts: Post[], comments: Comment[], users: User[]): PreparedPost[] {
  return posts.map((post) => ({
    ...post,
    user: users.find((user) => user.id === post.userId),
    comments: comments.filter((comment) => comment.postId === post.id),
  }));
}

const preparedPosts = preparePosts(postsFromServer, commentsFromServer, usersFromServer);

export const App: React.FC = () => (
  <div className="App">
    <div className="header">.</div>
    <PostList posts={preparedPosts} />
  </div>
);
