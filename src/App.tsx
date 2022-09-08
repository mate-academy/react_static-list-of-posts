import React from 'react';

import './App.scss';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';
import { PostToRender } from './types/PostToRender';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

function prepareData(
  posts: Post[],
  users: User[],
  comments: Comment[],
): PostToRender[] {
  return posts.map((post) => ({
    ...post,
    comments: comments.filter((comment) => (
      comment.postId === post.id
    )),
    user: users.find((user) => (
      user.id === post.userId
    )) || null,
  }));
}

const postsRawData = prepareData(
  postsFromServer,
  usersFromServer,
  commentsFromServer,
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postsRawData} />
  </section>
);
