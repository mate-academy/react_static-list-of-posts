import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="commentList">
    <h3>
      Comments:
    </h3>
    {comments.length
      ? comments.map(comment => <Comment key={comment.id} {...comment} />)
      : <p>No comments provided </p>}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })),
};

CommentList.defaultProps = {
  comments: [],
};
