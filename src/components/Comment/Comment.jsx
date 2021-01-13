import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import CommentShape from '../../Types';

const Comment = ({ name, email, body }) => (
  <>
    <Card>
      <Card.Body colSpan="4">
        <Card.Title><h5>{ name }</h5></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
        <Card.Text>
          {body}
        </Card.Text>
      </Card.Body>
    </Card>
  </>
);

Comment.propTypes = CommentShape.isRequired;

export default Comment;
