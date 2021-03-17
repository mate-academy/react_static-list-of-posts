import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { ComentsType } from '../../Types';

export const CommentList = ({ comments }) => (
  <div className="Comments">
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape(ComentsType),
  ).isRequired,
};
