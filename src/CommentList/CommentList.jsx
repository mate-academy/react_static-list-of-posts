import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="comments">
    {comments.map(comment => (
      <Comment
        key={comment.id}
        name={comment.name}
        comment={comment.body}
        email={comment.email}
      />
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
