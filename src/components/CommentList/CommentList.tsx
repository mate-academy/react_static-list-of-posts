import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = (props) => {
  return (
    <CommentInfo comment={props.oneComment} />
  );
};
