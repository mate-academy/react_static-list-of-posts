import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.scss';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <ul className="comment-list">
    {comments.map(comment => (
      <li key={comment.id}>
        <Comment
          name={comment.name}
          body={comment.body}
          email={comment.email}
        />
      </li>
    ))}
  </ul>
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
