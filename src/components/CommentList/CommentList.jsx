import React from 'react';
import PropTypes from 'prop-types';
import { commentShape } from '../../types';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <ul className="CommentList">
    {
      comments.map(
        comment => <Comment key={comment.id} comment={comment} />,
      )
    }
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    commentShape.isRequired,
  ).isRequired,
};
