import React from 'react';
import { commentType } from '../../types';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  comments.map(
    comment => (
      <div key={comment.id}>
        <Comment {...comment} />
      </div>
    ),
  )
);

CommentList.propTypes = {
  comments: commentType.isRequired,
};
