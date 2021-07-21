import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup } from 'react-bootstrap';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ comments }) => (
  <ListGroup>
    {comments.map(comment => (
      <ListGroup.Item variant="info" key={comment.id}>
        <Comment
          name={comment.name}
          body={comment.body}
          email={comment.email}
        />
      </ListGroup.Item>
    ))}
  </ListGroup>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      body: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
