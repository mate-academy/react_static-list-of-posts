import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { commentType } from '../../types/commentType';

import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <ul className="post__comments-list comments-list">
    <span>Comments:</span>
    {comments.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(commentType).isRequired,
};
