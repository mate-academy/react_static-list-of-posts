import PropTypes from 'prop-types';
import React from 'react';
import Comment from '../Comment';

export default function CommentList({ comments }) {
  const commentPost = comments.map(comment => (
    <Comment key={comment.id} {...comment} />
  ));

  return (
    <>
      <p>Comment:</p>
      <ul>
        {commentPost}
      </ul>
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
