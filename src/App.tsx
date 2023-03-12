import React from 'react';
import { PostList } from './components/PostList';
import { Post } from './types/Post';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const preparedPosts: Post[] = postsFromServer.map(post => {
  const user = usersFromServer.find(person => person.id === post.userId);
  const comments = commentsFromServer
    .filter(comment => comment.postId === post.id);

  return {
    ...post,
    user: user || null,
    comments,
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList allPosts={preparedPosts} />
  </section>
);
