import React from 'react';
import PropTypes from 'prop-types';
import { commentPropTypes } from '../proptypes';

import { Comment } from '../Comment';

export const CommentList = ({ commentsFilter }) => (
  <ul className="post__comments">
    {commentsFilter.map(comment => (
      <li key={comment.id} className="comments__item">
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  commentsFilter: PropTypes.arrayOf(
    PropTypes.shape(commentPropTypes),
  ).isRequired,
};
