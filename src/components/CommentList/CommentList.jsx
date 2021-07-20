import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { commentPropTypes } from '../../types';

export const CommentList = ({ comments }) => (
  <ul className="comments">
    {comments.map(comment => (
      <li key={comment.id} className="comment">
        <Comment comment={comment} />
      </li>
    ))}
  </ul>
);

CommentList.defaultProps = {
  comments: '',
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(commentPropTypes),
};
