import React from 'react';
import PropTypes from 'prop-types';

import './CommentList.scss';

import Comment from '../Comment/Comment';

const CommentList = function({ comments }) {
  return (
    <ul className="CommentList">
      {comments.map(comment => (
        <li key={comment.id}>
          <Comment {...comment} />
        </li>
      ))}
    </ul>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default CommentList;
