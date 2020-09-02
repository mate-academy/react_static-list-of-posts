import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.scss';

import { Comment } from '../Comment';

export const CommentList = ({ commentsOnPost }) => (
  <ul className="comments">
    {commentsOnPost.map(comment => (
      <li
        className="comments__comment comment"
        key={comment.id}
      >
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  commentsOnPost: PropTypes.arrayOf(PropTypes.object).isRequired,
};
