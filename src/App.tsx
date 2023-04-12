import React from 'react';
import './App.scss';
import { PostList } from './components/PostList';
import { Post } from './types/Post';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const postsAndCommentsOfUser: Post[] = postsFromServer.map(
  post => ({
    ...post,
    user: usersFromServer
      .find(user => (post.userId === user.id)) || null,
    comments: commentsFromServer
      .filter(comment => (
        comment.postId === post.id
      )) || [],
  }),
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={postsAndCommentsOfUser} />
  </section>
);
