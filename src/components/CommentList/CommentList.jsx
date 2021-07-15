import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { commentShape } from '../../types';

export const CommentList = ({ commentsArr }) => (
  <ul>
    {commentsArr.map(comment => (
      <li key={comment.id}>
        <Comment commentObj={comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  commentsArr: PropTypes.arrayOf(commentShape).isRequired,
};
