import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './components/Types/Posts';
import { User } from './components/Types/Users';
import { PostList } from './components/PostList';

function getUser(userId: number): User {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: commentsFromServer.filter(comment => comment.postId === post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <div className="PostList">
      <PostList posts={posts} />
    </div>
  </section>
);
