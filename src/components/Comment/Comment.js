import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { CommentShape } from './CommentShape';

export const Comment = (props) => {
  const { name, email, body } = props;

  return (
    <Alert variant="secondary">
      <Row>
        <Col xs={8} sm={5} md={4}>
          <Alert variant="info">
            {name}
            <hr />
            <h6 className="email">{email}</h6>
          </Alert>
        </Col>
        <Col xs={12} sm={7} md={8}>
          {body}
        </Col>
      </Row>
    </Alert>
  );
};

Comment.propTypes = CommentShape.isRequired;
