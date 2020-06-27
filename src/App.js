import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const App = () => (
  <Container className="App">
    <h1>Static list of posts</h1>
    <Row>
      <Col sm>
        <Alert variant="primary">
          posts:
          <Badge variant="secondary">{posts.length}</Badge>
        </Alert>
      </Col>
      <Col sm>
        <Alert variant="primary">
          comments:
          <Badge variant="secondary">{comments.length}</Badge>
        </Alert>
      </Col>
      <Col sm>
        <Alert variant="primary">
          Users:
          <Badge variant="light">{users.length}</Badge>
        </Alert>
      </Col>
    </Row>
  </Container>
);

export default App;
