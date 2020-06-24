import React from 'react';
import PropTypes from 'prop-types';

import './CommentList.css';
import { Comment } from '../Comment/Comment';
import { CommentsTypes } from '../Shape/CommentsTypes';

export const CommentList = ({ commentList }) => (
  <ul className="post__comments comments">
    {commentList.map(comment => (
      <li key={comment.id} className="comment__item">
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(
    CommentsTypes,
  ).isRequired,
};
