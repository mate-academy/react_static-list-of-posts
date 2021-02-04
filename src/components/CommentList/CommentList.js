import React from 'react';
import { CommentListType } from '../../types';
import { Comment } from '../Comment';

export const CommentList = ({ comment }) => (
  <>
    <Comment {...comment} />
  </>
);

CommentList.propTypes = CommentListType;
