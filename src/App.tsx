/* eslint-disable @typescript-eslint/indent */
import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post, PreparedPost } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';

const preparePosts = (
  posts: Post[],
  users: User[],
  comments: Comment[],
): PreparedPost[] =>
  posts
    .map<PreparedPost | null>(post => {
      const user = users.find(person => person.id === post.userId);

      if (!user) {
        return null;
      }

      return {
        ...post,
        user,
        comments: comments.filter(comment => comment.postId === post.id),
      };
    })
    .filter((post): post is PreparedPost => post !== null);

const preparedPosts: PreparedPost[] = preparePosts(
  postsFromServer,
  usersFromServer,
  commentsFromServer,
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
