import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { CommentsFromServer } from './types/Comments';
import { PostFromServer, Posts } from './types/Posts';
import { UsersFromServer } from './types/Users';
import { PostList } from './components/PostList';

function getPostById(
  posts: PostFromServer[],
  comments: CommentsFromServer[],
  users: UsersFromServer[],
): Posts[] {
  return posts.map(post => ({
    ...post,
    comments: comments.filter(comment => (
      comment.postId === post.id
    )),
    user: users.find(user => (
      user.id === post.userId
    )) || null,
  }));
}

const data = getPostById(
  postsFromServer,
  commentsFromServer,
  usersFromServer,
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={data} />
  </section>
);
