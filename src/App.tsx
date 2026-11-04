import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList/PostList';

export const App: React.FC = () => {
  const posts = postsFromServer.map(post => {
    const user = usersFromServer.find(
      currentUser => currentUser.id === post.userId,
    );

    const comments = commentsFromServer.filter(comment => {
      return comment.postId === post.id;
    });

    return {
      ...post,
      user,
      comments,
    };
  });

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList posts={posts} />
    </section>
  );
};
