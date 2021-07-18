import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { TypeComment } from '../../type';

export const CommentList = ({ comments }) => (
  <>
    comments:
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <Comment {...comment} />
        </li>
      ))}
    </ul>
  </>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    TypeComment.isRequired,
  ).isRequired,
};
