import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import { CommentType } from '../Types/Type';

const CommentList = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentType).isRequired,
};

export default CommentList;
