import React from 'react';
import './App.scss';
import {
  Post,
  PreparedPost,
  User,
  PostComment,
} from './appTypeDefs';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList/PostList';

export function preparePosts(
  posts: Post[],
  postComments: PostComment[],
  users: User[],
): PreparedPost[] {
  return posts.map(post => ({
    ...post,
    user: users.find(user => (
      user.id === post.userId
    )) || null,
    postComments: postComments.filter(postComment => (
      postComment.postId === post.id
    )) || null,
  }));
}

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparePosts(
      postsFromServer,
      commentsFromServer,
      usersFromServer,
    )}
    />
  </div>
);

export default App;
