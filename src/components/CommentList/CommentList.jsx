import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

export const CommentList = ({ comment }) => (
  <div className="post__comments">
    <Comment {...comment} />
  </div>
);

CommentList.propTypes = {
  comment: PropTypes.objectOf(
    PropTypes.number,
    PropTypes.string,
  ).isRequired,
};
