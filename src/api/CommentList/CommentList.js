import React from 'react';
import PropTypes from 'prop-types';

import comments from '../comments';
import { Comment } from '../Comment';

export const CommentList = ({ postId }) => (
  <ul>
    {comments.filter(a => (a.postId === postId)).map(a => (
      <li>
        <Comment comment={a} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  postId: PropTypes.number.isRequired,
};
