import React from 'react';
import './CommentList.scss';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

export const CommentList = ({ list }) => (
  <div className="comments">
    <ul>
      {list.map(comment => (
        <li key={comment.id}>
          <Comment {...comment} />
        </li>
      ))}
    </ul>
  </div>
);

CommentList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ),
};

CommentList.defaultProps = {
  list: [],
};
