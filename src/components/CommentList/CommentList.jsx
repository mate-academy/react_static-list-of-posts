import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { CommentType } from '../../types';

export const CommentList = ({ comments }) => (
  <div className="comments">
    <h3>Comments:</h3>
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <Comment {...comment} />
        </li>
      ))}
    </ul>
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape(CommentType).isRequired,
  ),
};

CommentList.defaultProps = {
  comments: [],
};
