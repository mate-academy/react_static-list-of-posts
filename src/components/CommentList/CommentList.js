import React from 'react';
import { Comment } from '../Comment/Comment';
import { CommentListShape } from '../Shape';

export const CommentList = ({ comments }) => (
  comments.map(comment => <Comment key={comment.id} {...comment} />)
);

CommentList.propTypes = CommentListShape.isRequired;
