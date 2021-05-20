import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from '../Comment';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li className="commet__item" key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

CommentList.defaultProps = {
  comments: [],
}
