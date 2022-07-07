import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { Post } from './components/PostInfo/PostInfo';
import { Comment } from './components/CommentInfo/CommentInfo';
import { User } from './components/UserInfo/UserInfo';
// eslint-disable-next-line import/no-cycle
import { PostList } from './components/PostList/PostList';

export interface PreparedPosts extends Post {
  user: User;
  comments: Comment[];
}

const preparedPosts:PreparedPosts[] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId) || null,
  comments: comments.filter(comment => comment.postId === post.id),
}) as PreparedPosts);

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
