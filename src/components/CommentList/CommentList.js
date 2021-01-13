import React from 'react';
import { commentType } from '../../types';
import { Comment } from '../Comment';

export const CommentList = ({ comment }) => (
  comment.map(
    item => (<Comment {...item} key={item.id} />),
  )
);

CommentList.propTypes = {
  comment: commentType.isRequired,
};
