import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <div className="comments_list">
    {comments.map(comment => (
      <div className="comment_list" key={comment.id}>
        <Comment {...comment} />
      </div>
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
