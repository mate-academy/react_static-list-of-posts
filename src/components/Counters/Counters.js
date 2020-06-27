import React from 'react';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';

import posts from '../../api/posts';
import comments from '../../api/comments';
import users from '../../api/users';

export const Counters = () => (
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
);
