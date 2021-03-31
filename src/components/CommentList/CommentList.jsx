import React from 'react';
import PropTypes from 'prop-types';
import { CommentType } from '../../types';
import { Comment } from '../Comment';
import './commentList.scss';

export const CommentList = ({ comments }) => (
  <div className="commentList">
    {comments.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentType),
};

CommentList.defaultProps = {
  comments: [],
};
