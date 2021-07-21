import React from 'react';
import PropTypes from 'prop-types';
import { CommentPropTypes } from '../../types';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <div className="column">
    {comments.map(comment => (
      <div
        key={comment.id}
        className="message is-warning"
      >
        <Comment {...comment} />
      </div>
    ))}

  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentPropTypes).isRequired,
};
