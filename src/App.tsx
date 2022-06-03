import React from 'react';
import './App.scss';
import {
  Post,
  PreparedPost,
  User,
  Comment,
} from './appTypeDefs';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList/PostList';

export function preparePosts(
  posts: Post[],
  comments: Comment[],
  users: User[],
): PreparedPost[] {
  return posts.map(post => ({
    ...post,
    user: users.find(user => (
      user.id === post.userId
    )) || null || undefined,
    comment: comments.find(comment => (
      comment.postId === post.id
    )) || null || undefined,
  }));
}

export const preparedPosts = preparePosts(
  postsFromServer,
  commentsFromServer,
  usersFromServer,
);

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
    <h1>Static list of posts</h1>
  </div>
);

export default App;
