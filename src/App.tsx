import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';

export const App: React.FC = () => {
  const posts = postsFromServer.map(post => {
    const user: User | undefined
      = usersFromServer.find(u => u.id === post.userId);

    return {
      id: post.id,
      body: post.body,
      title: post.title,
      user,
    };
  });

  const comments = commentsFromServer.map(comment => {
    const postFromServer = postsFromServer.find(p => p.id === comment.postId);

    if (postFromServer) {
      const user: User | undefined
      = usersFromServer.find(u => u.id === postFromServer.userId);

      const post = {
        id: postFromServer.id,
        body: postFromServer.body,
        title: postFromServer.title,
        user,
      };

      return {
        id: comment.id,
        email: comment.email,
        name: comment.name,
        body: comment.body,
        post,
      };
    }

    return {
      id: comment.id,
      email: comment.email,
      name: comment.name,
      body: comment.body,
      post: undefined,
    };
  });

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList posts={posts as Post[]} comments={comments as Comment[]} />
    </section>
  );
};
