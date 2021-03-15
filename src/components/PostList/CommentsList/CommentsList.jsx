import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import './CommentsList.scss';

const CommentsList = ({ list }) => (
  <ul className="commentsList">
    {
      list.map(comment => (
        <li key={comment.id}>
          <Comment comments={comment} />
        </li>
      ))
    }
  </ul>
);

CommentsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default CommentsList;
