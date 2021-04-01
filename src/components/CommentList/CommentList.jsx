import React from 'react';
import PropTypes from 'prop-types';
import { commentType } from '../../types';
import { Comment } from '../Comment';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <ul className="comment-list">
    <h3 className="comment-list__title">Comments</h3>
    {comments.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(commentType).isRequired,
};
