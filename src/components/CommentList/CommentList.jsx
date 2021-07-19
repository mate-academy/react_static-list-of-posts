import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from '../Comment';

import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="list">
    <h3>
      <span role="img" aria-label="Comments section emoji">💬 </span>
      Comments:
    </h3>
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
