import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.scss';
import Comment from '../Comment/Comment';

function CommentList({ comments }) {
  return (
    <div className="comment-list">
      {comments.map(comment => <Comment comment={comment} key={comment.id} />)}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommentList;
