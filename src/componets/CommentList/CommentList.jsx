import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { CommentType } from '../ListTypes';

export const CommentList = ({ comments }) => (
  <ol>
    {comments.map(comment => (
      <li key={comment.id} className="comment">
        <Comment comment={comment} />
      </li>
    ))}
  </ol>
);

CommentList.defaultProps = {
  comments: '',
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentType),
};
