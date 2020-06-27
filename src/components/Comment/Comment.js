import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

// import comments from './api/comments';

export const Comment = (props) => {
  const { name, email, body } = props;

  return (
    <Alert variant="secondary">
      <Row>
        <Col xs={8} sm={5} md={4}>
          <Alert variant="info">
            {name}
            <br />
            <h6>{email}</h6>
          </Alert>
        </Col>
        <Col xs={12} sm={7} md={8}>
          {body}
        </Col>
      </Row>
    </Alert>
  );
};

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
