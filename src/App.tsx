import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/Post';
import { FullPost } from './types/FullPost';
import { PostList } from './components/PostList';

const postsWithUsers: FullPost[] = postsFromServer.map((post:Post) => {
  const user = usersFromServer.find((person) => person.id === post.userId);
  const userComments = commentsFromServer.filter((comment) => (
    comment.postId === post.id
  ));

  return {
    ...post,
    user,
    comments: userComments,
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postsWithUsers} />
  </section>
);
