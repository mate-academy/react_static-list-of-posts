import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ commentList }) => (
  <div>
    {commentList.map(comment => (
      <div className="comment" key={comment.id}>
        <Comment {...comment} />
      </div>
    ))}
  </div>
);

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
