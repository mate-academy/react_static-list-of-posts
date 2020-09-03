import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.scss';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ currentComments }) => (
  <ul className="comments">
    {currentComments.map(comment => (
      <li className="comments__comment">
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  currentComments: PropTypes.arrayOf(PropTypes.object),
};

CommentList.defaultProps = {
  currentComments: [],
};
