import React from 'react';
import { Comment } from './Comment';
import { CommentShape } from '../shapes/CommentShape';

export const CommentList = ({ comments }) => (
  comments.map(comment => (
    <>
      <Comment {...comment} key={comment.id} />
    </>
  ))
);

CommentList.propTypes = CommentShape.isRequired;
