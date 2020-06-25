import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from './Comment';

export const CommentList = ({ commentList }) => (
  <ul>
    {commentList.map(x => (
      <li>
        <Comment comment={x} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  commentList: PropTypes.instanceOf(Array).isRequired,
};
