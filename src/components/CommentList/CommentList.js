import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

const CommentList = ({ comments }) => (
  <div className="comments">
    {comments.map(comment => <Comment comment={comment} key={comment.id} />)}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(Comment.propTypes).isRequired,
};

export { CommentList };
