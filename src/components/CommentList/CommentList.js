import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';

function CommentList({ newComments }) {
  return (
    <>
      {newComments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
}

CommentList.propTypes = {
  newComments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default CommentList;
