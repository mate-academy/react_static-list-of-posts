import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function CommentList({ comments }) {
  return (
    <>
      <b>Comments:</b>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <Comment {...comment} />
          </li>
        ))}
      </ul>
    </>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommentList;
