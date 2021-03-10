import PropTypes from 'prop-types';
import React from 'react';
import './CommentList.scss';

import { Comment } from '../Comment';
import { TypeComment } from '../../Types/types';

export function CommentList({
  comments,
}) {
  const renderedComments = comments.map(comment => (
    <Comment
      key={comment.id}
      comment={comment}
    />
  ));

  return (
    <>
      <p className="comment__text">Comments:</p>
      <ul className="comment__list">
        {renderedComments}
      </ul>
    </>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    TypeComment.isRequired,
  ).isRequired,
};
