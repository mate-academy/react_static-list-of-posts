import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import PostList from './components/PostList';
import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  cmts: comments.filter(cmts => cmts.postId === post.id),
}));

const App = () => (
  <Container className="App">
    <Header as="h1" className="page__title" color="blue">
      Static list of posts
    </Header>
    <PostList list={preparedPosts} />
  </Container>
);

export default App;
