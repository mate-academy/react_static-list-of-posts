import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';

export const Post = ({
  title,
  body,
}) => (
  <>
    <Card
      bg="dark"
      text="white"
      style={{ width: '50%' }}
      className="ml-4 mb-1"
    >
      <Card.Header><Card.Title>{title}</Card.Title></Card.Header>
      <Card.Body>
        <Card.Text>
          {body}
        </Card.Text>
      </Card.Body>
    </Card>
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
