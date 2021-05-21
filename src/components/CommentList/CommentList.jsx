import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <ul className="Post__CommentList">
    {comments.map(comment => (
      <li key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

const CommentType = PropTypes.shape({
  id: PropTypes.number.isRequired,
});

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentType).isRequired,
};
