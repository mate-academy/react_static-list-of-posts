import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';

import { PostList } from './components/PostList/PostList';
import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const App = () => (
  <Container className="App">
    <h1>Static list of posts</h1>
    <Row>
      <Alert variant="primary">
        {`posts: `}
        <Badge variant="light">{posts.length}</Badge>
      </Alert>
      <Alert variant="primary">
        {`comments: `}
        <Badge variant="light">{comments.length}</Badge>
      </Alert>
      <Alert variant="primary">
        {`Users: `}
        <Badge variant="light">{users.length}</Badge>
      </Alert>
    </Row>
    <PostList posts={posts} />
  </Container>
);

export default App;
