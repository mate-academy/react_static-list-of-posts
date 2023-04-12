import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { CompletePost } from './types/CompletePost';
import { PostList } from './components/PostList';

const completePost: CompletePost[] = postsFromServer.map(
  post => ({
    ...post,
    user: usersFromServer
      .find(({ id }) => id === post.userId) || null,
    comments: commentsFromServer
      .filter(({ postId }) => postId === post.id),
  }),
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <div className="PostList">
      <PostList completePost={completePost} />
    </div>
  </section>
);
