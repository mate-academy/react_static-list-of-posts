import React from 'react';

import './App.scss';

import posts from '../../_api/posts';
import comments from '../../_api/comments';
import users from '../../_api/users';
import { Post } from '../../_types/post';
import PostList from '../PostList/PostList';

const preparedPosts: Post[] = posts.map(post => (
  {
    ...post,
    user: users.find(user => post.userId === user.id) || null,
    comments: comments.filter(comment => comment.postId === post.id),
  }
));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
