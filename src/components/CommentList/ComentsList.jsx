import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import './CommentList.scss';

export const CommentsList = ({ comments }) => (
  <div className="comment__list">
    {comments.map(comment => (
      <Comment userComment={comment} />
    ))}
  </div>
);

CommentsList.propTypes = {
  comments: PropTypes.arrayOf().isRequired,
};
