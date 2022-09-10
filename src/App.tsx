import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './types/Post';
import { PostFromServer } from './types/PostFromServer';
import { CommentFromServer } from './types/CommentFromServer';
import { UserFromServer } from './types/UserFromServer';
import { PostList } from './components/PostList';

function getUserById(
  post: PostFromServer,
  users: UserFromServer[],
): UserFromServer | null {
  return users.find((user) => (
    post.userId === user.id
  )) || null;
}

function getCommentsById(
  post: PostFromServer,
  comments: CommentFromServer[],
): CommentFromServer[] {
  return comments.filter((comment) => (
    comment.postId === post.id
  ));
}

const preparedPosts: Post[] = postsFromServer.map((post) => (
  {
    ...post,
    user: getUserById(post, usersFromServer),
    comments: getCommentsById(post, commentsFromServer),
  }
));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList postList={preparedPosts} />
  </section>
);
