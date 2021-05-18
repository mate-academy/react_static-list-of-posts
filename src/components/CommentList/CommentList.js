import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment';

const CommentList = ({ comment }) => (
  <ul>
    <Comment {...comment} />
  </ul>
);

CommentList.propTypes = {
  comment: PropTypes.shape({}).isRequired,
};

export default CommentList;
