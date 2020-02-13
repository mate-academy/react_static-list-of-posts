import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import './commentsList.css';

const CommentList = ({ comments }) => (
  comments.map(comment => (
    <li key={comment.id} className="comment">
      <Comment {...comment} />
    </li>
  ))
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default CommentList;
