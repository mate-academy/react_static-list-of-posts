import React from 'react';

import users from './api/users';
import comments from './api/comments';
import posts from './api/posts';

import { PostList } from './components/PostList/PostList';
import { PreparedPost } from './api/types/PreparedPost';

export const preparedPosts: PreparedPost[] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="title is-1 is-spaced">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
