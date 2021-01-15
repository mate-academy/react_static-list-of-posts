import React from 'react';
import PropType from 'prop-types';
import { commentType } from '../../types';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <div>
    {comments.map(comment => (
      <Comment
        {...comment}
        key={comment.id}
      />
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropType.arrayOf(commentType).isRequired,
};
