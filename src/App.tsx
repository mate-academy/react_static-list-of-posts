import React from 'react';
import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import {
  Comment,
  Post,
  User,
} from './react-app-env';
import { PostList } from './components/PostList';

const preparePosts = (
  posts: Post[],
  comments: Comment[],
  users: User[],
) => {
  return posts.map((post) => ({
    ...post,
    user: users.find((user) => user.id === post.userId) || null,
    comments: comments.filter(
      (comment) => comment.postId === post.id,
    ),
  }));
};

const allPosts = preparePosts(
  postsFromServer,
  commentsFromServer,
  usersFromServer,
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={allPosts} />
  </section>
);
