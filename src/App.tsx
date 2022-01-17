import React from 'react';
import { Card } from 'react-bootstrap';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';
import './App.scss';

const prepearedPosts: PrepearedPost[] = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id) || null,
  comments: comments.filter(comment => comment.postId === post.id) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <Card.Header as="h1">Static list of posts</Card.Header>
    <PostList posts={prepearedPosts} />
  </div>
);

export default App;
