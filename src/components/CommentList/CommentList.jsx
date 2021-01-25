import React from 'react';
import './CommentList.scss';
import PropTypes from 'prop-types';

import { CommentType } from '../../types';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ comments }) => (
  <div className="comment_list">
    <p className="comment_title">Comments ⬇</p>
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape(CommentType),
  ).isRequired,
};
