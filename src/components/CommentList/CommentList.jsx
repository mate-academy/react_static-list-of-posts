import React from 'react';
import PropTypes from 'prop-types';
import { CommentsPropTypes } from '../Type/type';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ comments }) => (
  <div className="comments">
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentsPropTypes).isRequired,
};
