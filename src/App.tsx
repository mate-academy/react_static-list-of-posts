import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Posts } from './types/Posts';
import { Comments } from './types/Comments';
import { Users } from './types/Users';
import { FullPost } from './types/FullPosts';

import { PostList } from './components/PostList';

const preparePost = (
  posts: Posts[],
  comments: Comments[],
  users: Users[],
): FullPost[] => {
  return posts.map(post => ({
    ...post,
    comments: comments.filter((comment) => comment.postId === post.id),
    user: users.find((user) => user.id === post.userId) || null,
  }));
};

const resultPost = preparePost(
  postsFromServer,
  commentsFromServer,
  usersFromServer,
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={resultPost} />
  </section>
);
