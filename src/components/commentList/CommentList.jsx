import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from '../comment';

export function CommentsList({ comments }) {
  return (
    <div>
      {comments.map(comment => (
        <Comment {...comment} key={comment.id} />
      ))}
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};
