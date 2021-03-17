import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import './commentList.scss';

export const CommentList = ({ comments }) => (
  <ul className="list">
    {comments.map(comment => (
      <li className="list__comment" key={comment.id}>
        <Comment {...comment} />
      </li>
    ))
    }
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
