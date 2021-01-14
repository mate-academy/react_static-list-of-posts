import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Comment.scss';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Comment = ({ name, email, body }) => (
  <>
    <Card className="mb-3 card">
      <Card.Body>
        <h6>{ name }</h6>
        <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
        <Card.Text>
          {body}
        </Card.Text>
      </Card.Body>
    </Card>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Comment;
