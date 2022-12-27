import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PreparedPost } from './types/PreparedPost';
import { PostList } from './components/PostList/PostList';

const posts: PreparedPost[] = postsFromServer
  .map(post => {
    const foundUser = usersFromServer.find(user => post.id === user.id);
    const foundComments = commentsFromServer
      .filter(comment => post.id === comment.postId);

    return {
      ...post,
      user: foundUser || null,
      comments: foundComments,
    };
  });

export const App: React.FC = () => {
  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
