import React from 'react';

import './App.scss';

import { PostList } from './components/PostList';
import { Post } from './type/Post';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function findUser(post:Post) {
  const userOfPost = usersFromServer.find(user => user.id === post.userId);

  return userOfPost || null;
}

function findComments(post: Post) {
  const listComments = commentsFromServer.filter(comment => (
    comment.postId === post.id
  ));

  if (!listComments.length) {
    return null;
  }

  return listComments;
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: findUser(post),
  commentsList: findComments(post),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
