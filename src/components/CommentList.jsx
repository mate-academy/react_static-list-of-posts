import React from 'react';
import { Comment } from './Comment';
import { TypeComments } from '../types';

export const CommentList = ({ comments }) => (
  <>
    <h2>Comments</h2>
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </>
);

CommentList.propTypes = {
  comments: TypeComments.isRequired,
};
