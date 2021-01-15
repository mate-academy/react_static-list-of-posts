import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../comment/Comment';
import { commentsType } from '../types/propTypesCollection';
import './CommentList.scss';

export const CommentList = ({ commentList }) => (
  <div className="comment-list">
    {commentList.map(comment => (
      <Comment comment={comment} key={comment.id} />
    ))}
  </div>
);

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(commentsType).isRequired,
};
