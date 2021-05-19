import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.scss';
import { Comment } from '../Comment';

export function CommentList({ comments }) {
  return (
    <div className="post-comments">
      {comments.map(item => (
        <Comment {...item} key={item.id} />
      ))}
    </div>

  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
