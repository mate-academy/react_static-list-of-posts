import React from 'react';
import './CommentList.scss';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <div className="comments">
    {comments.map(comment => (
      <div key={comment.id} className="comment">
        <Comment comment={comment} />
      </div>
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
