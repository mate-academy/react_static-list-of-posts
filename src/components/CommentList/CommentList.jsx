import React from 'react';
import PropTypes from 'prop-types';

import './CommentList.scss';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <div className="comments">
    <h3 className="comments__heading">Comments: </h3>
    {comments.map(comment => (
      <div key={comment.id} className="comments__item">
        <Comment {...comment} />
      </div>
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
