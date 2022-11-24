import React from 'react';
import { PostList } from './components/PostList';
import { Post } from './types/Post';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const getUser = (userId : number) => usersFromServer.find((user) => user.id === userId);

const getComments = (postId : number) => commentsFromServer.filter((comment) => comment.postId === postId);

const fullPosts = postsFromServer.map((post) => {
  const comments = getComments(post.id);
  const user = getUser(post.userId);
  const fullPost : Post = { ...post };

  fullPost.comments = comments;
  if (user) {
    const userForPost = {
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
    };

    fullPost.user = userForPost;
  }
  return fullPost;
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={fullPosts} />
  </section>
);
