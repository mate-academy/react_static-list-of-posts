import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from './Comment';

export const CommentList = ({ comments }) => (
  <>
    <ul>
      {comments.map(item => (
        <li key={item.id}>
          <Comment comment={item} />
        </li>
      ))}
    </ul>
  </>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
