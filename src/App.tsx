import React from 'react';
import 'bulma/css/bulma.min.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { Post } from './types/Post';
import { PostList } from './components/PostList';

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId) || null,
  comments: comments.filter(comment => comment.postId === post.id) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="title is-1 is-centered">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
