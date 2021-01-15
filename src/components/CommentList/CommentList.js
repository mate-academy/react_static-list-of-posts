import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import { CommentType } from '../Types/Type';

const CommentList = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li key={comment.id}>
        <Comment {...comment} comment={comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentType).isRequired,
};

export default CommentList;
