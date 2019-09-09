import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.scss';
import Comment from '../Comment/Comment';

function CommentList({ comments }) {
  return (
    <div className="comment-list">
      {comments.map(comment => <Comment key={comment.id} {...comment} />)}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  })).isRequired,
};

export default CommentList;
