import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import './CommentList.scss';
import { commentsType } from '../typedefs';

export const CommentList = ({ comments }) => (
  <>
    {comments.map(comment => (
      <li
        key={comment.id}
        className="Comment"
      >
        <Comment {...comment} />
      </li>
    ))}
  </>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape(
      commentsType,
    ),
  ).isRequired,
};
