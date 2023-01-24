import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './Types/Post';
import { PostList } from './components/PostList';

const posts = postsFromServer.map(post => {
  const neededUser = usersFromServer.find(user => user.id === post.userId);
  const comments = commentsFromServer.filter(
    comment => comment.postId === post.id,
  );

  const preparedPost:Post = { ...post, user: neededUser || null, comments };

  return preparedPost;
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
