import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { commentTypes } from '../../types';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <ol className="comments">
    {comments.map(comment => (
      <li key={comment.id} className="comment">
        <Comment comment={comment} />
      </li>
    ))}
  </ol>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(commentTypes),
};
