import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ comments }) => (
  <div className="comment-list">
    <p>Comments:</p>
    {comments.map(
      comment => <Comment comment={comment} key={comment.id} />
    )}
  </div>
);

CommentList.propTypes = { comments: PropTypes.arrayOf(PropTypes.object) };
CommentList.defaultProps = { comments: [{}] };

export default CommentList;
