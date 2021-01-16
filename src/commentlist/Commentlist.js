import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../comment/Comment';
import { commentType } from '../types/propTypesCollection';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="comment-list">
    {comments.map(comment => (
      <Comment comment={comment} key={comment.id} />
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(commentType).isRequired,
};
