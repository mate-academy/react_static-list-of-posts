import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../Types/Types';

type Props = {
  oneComment: Comment;
};

export const CommentList:React.FC<Props> = (props) => {
  return (
    <CommentInfo comment={props.oneComment} />
  );
};
