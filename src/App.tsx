import React from 'react';

import './App.scss';

// import postsFromServer from './api/posts';
// import commentsFromServer from './api/comments';
// import usersFromServer from './api/users';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Comment } from './types/Comment';
import { User } from './types/User';
import { Post } from './types/Post';
import { PostList } from './components/PostList';

function getComments(postId: number): Comment[] | [] {
  const foundComments
    = commentsFromServer.filter(comment => comment.postId === postId);

  return foundComments || [];
}

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  comments: getComments(post.id),
  user: getUser(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <div className="PostList">
      <PostList posts={posts} />
    </div>
  </section>
);
