import React from 'react';
import './CommentList.scss';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';

function CommentList({ comments }) {
  return (
    <>
      <h2>Comments</h2>
      <div className="comments">
        {comments.map(comment => <Comment {...comment} key={comment.id} />)}
      </div>
    </>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default CommentList;
