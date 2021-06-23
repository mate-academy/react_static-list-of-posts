import React from 'react';
import PropTypes from 'prop-types';

export const CommentList = ({ list }) => (
  <ul>
    {list.map(comment => (
      <li key={comment.id}>
        <div>{`Name: ${comment.name}`}</div>
        <div>{comment.body}</div>
        <div>{`Email: ${comment.email}`}</div>
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
