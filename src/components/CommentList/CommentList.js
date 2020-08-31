import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from '../Comment/Comment';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <Comment
        key={comment.id}
        name={comment.name}
        email={comment.email}
        body={comment.body}
      />
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
