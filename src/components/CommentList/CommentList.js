import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';

function CommentList({ comments }) {
  return comments.map(
    comment => <Comment key={comment.id} comment={comment} />
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      body: PropTypes.string,
    })
  ).isRequired,
};

export default CommentList;
