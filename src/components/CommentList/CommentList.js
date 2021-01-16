import React from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment/Comment';

import { CommentShape } from '../shapes';

const CommentList = ({ commentList }) => (
  <ul>
    {commentList.map(comment => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(CommentShape).isRequired,
};

export default CommentList;
