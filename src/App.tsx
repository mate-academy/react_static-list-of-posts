import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

import { Comment } from './types/Comment';
import { Post, PostToRender } from './types/Post';
import { User } from './types/User';

function preparePosts(
  posts: Post[],
  comments: Comment[],
  users: User[],
): PostToRender[] {
  return posts.map((post) => ({
    ...post,
    comments: comments.filter((comment) => (
      post.id === comment.postId
    )),
    user: users.find((user) => (
      user.id === post.userId
    )) || null,
  }));
}

const postsToRender = preparePosts(
  postsFromServer,
  commentsFromServer,
  usersFromServer,
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postsToRender} />
  </section>
);
