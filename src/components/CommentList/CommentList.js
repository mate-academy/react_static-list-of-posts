import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

import { Comment } from '../Comment/Comment';

export const CommentList = (props) => {
  const { comments } = props;

  return (
    <ListGroup>
      {comments.map(comment => (
        <ListGroup.Item
          variant="light"
          key={comment.id}
        >
          <Comment
            {...comment}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};
