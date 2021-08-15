import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from './Comment';

export const CommentList = ({ comments }) => (
  <div>
    <b>comments:</b>
    <ul>
      {comments.map(comment => <Comment {...comment} key={comment.id} />)}
    </ul>
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
