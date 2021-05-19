import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';

import './CommentList.scss';

export const CommentList = ({ commentList }) => (
  <ul className="CommentList">
    {commentList.map(comment => (
      <li key={comment.id} className="CommentList__item">
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};
