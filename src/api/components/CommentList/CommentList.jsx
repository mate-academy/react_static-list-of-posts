import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { CommentType } from '../Types';

export const CommentList = ({ commentList }) => (
  <ul>
    <p>Comments List:</p>
    {commentList.map(comment => (
      <li key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(CommentType).isRequired,
};
