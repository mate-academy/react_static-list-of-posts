import React from 'react';
import { Comment } from '../../types';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type CommentListProps = {
  comments: Comment[]
};

export const CommentList: React.FC<CommentListProps> = (props) => {
  return (
    <>
      {props.comments.map(comment => (<CommentInfo comment={comment} />))}
    </>
  );
};
