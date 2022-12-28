import React from 'react';

import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/Post';

const preparePosts: Post[] = postsFromServer.map(post => {
  const user = usersFromServer.find(person => person.id === post.userId);

  const comments = commentsFromServer.filter(
    comment => comment.postId === post.id,
  );

  return {
    ...post,
    user,
    comments,
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparePosts} />
  </section>
);
