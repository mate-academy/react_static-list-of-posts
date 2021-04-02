import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import { Comment } from '../Comment';

export const CommentList = ({ commentList }) => (
  <>
    <ListGroup className="mb-4">
      {commentList.map(comment => (
        <ListGroup.Item
          action
          variant="info"
          key={comment.id}
          className="ml-4"
          style={{ width: '90%' }}
        >
          <Comment {...comment} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  </>
);

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
