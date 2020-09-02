import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import './Commentlist.scss';

export const CommentList = ({ replies }) => (
  <ul className="commentlist">
    {replies.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </ul>
);

CommentList.propTypes = {
  replies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
