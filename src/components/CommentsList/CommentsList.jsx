import React from 'react';
import PropTypes, { shape } from 'prop-types';

import { Comment } from '../Comment';

export const CommentsList = ({ comments }) => {
  if (!comments.length) {
    return '';
  }

  return (
    <>
      <h4>Comments</h4>
      <ul className="CommentsList">
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ul>
    </>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(shape({
    id: PropTypes.number,
  })).isRequired,
};
