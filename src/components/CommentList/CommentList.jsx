import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <div className="Post__CommentList">
    {comments.map(comment => (
      <div key={comment.id}>
        <Comment {...comment} />
      </div>
    ))}
  </div>
);

const propTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
});

CommentList.propTypes = {
  comments: PropTypes.arrayOf(propTypes).isRequired,
};
