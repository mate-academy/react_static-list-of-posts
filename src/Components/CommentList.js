import React from 'react';
import PropTypes from 'prop-types';

import comments from '../api/comments';
import { Comment } from './Comment';

export const CommentList = ({ postId }) => (
  <div>
    <b>comments:</b>
    <ul>
      {comments.filter(comment => comment.postId === postId)
        .map(comment => <Comment {...comment} key={comment.id} />)}
    </ul>
  </div>
);

CommentList.propTypes = {
  postId: PropTypes.number.isRequired,
};
