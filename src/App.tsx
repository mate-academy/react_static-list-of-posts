import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import usersFromServer from './api/users';
import commentsFromServer from './api/comments';

import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';

import { PostList } from './components/PostList';

const getFullPosts = (
  posts: Post[],
  users: User[],
  comments: Comment[],
) => {
  return posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: comments.filter(comment => post.id === comment.postId),
  }));
};

const fullPosts = getFullPosts(
  postsFromServer,
  usersFromServer,
  commentsFromServer,
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={fullPosts} />
  </section>
);
