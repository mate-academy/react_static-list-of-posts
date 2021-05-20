import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment';

import './CommentList.scss';

const CommentList = ({ comment }) => (
  <ul className="coment-list">
    {comment.map(post => (
      <li key={post.id}>
        <Comment {...post} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comment: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default CommentList;
