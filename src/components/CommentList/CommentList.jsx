import PropTypes from 'prop-types';
import React from 'react';
import Comment from '../Comment';

import './CommentList.scss';

export default function CommentList({
  comments,
}) {
  const postComments = comments.map(comment => (
    <Comment key={comment.id} {...comment} />
  ));

  return (
    <>
      <p className="comment__text">Comments:</p>
      <ul className="comment__list">
        {postComments}
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
