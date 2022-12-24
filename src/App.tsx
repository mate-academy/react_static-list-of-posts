import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';

function getUserId(userId: number): User | null {
  return usersFromServer.find(user => userId === user.id) || null;
}

function getCommentId(id: number): Comment[] {
  return commentsFromServer.filter(comment => id === comment.postId);
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserId(post.userId),
  comment: getCommentId(post.id),
}
));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
