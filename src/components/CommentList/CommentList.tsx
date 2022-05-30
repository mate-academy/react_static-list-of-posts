import React from 'react';
import { Comments } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

interface Prop {
  comments: Comments[]
}

export const CommentList: React.FC<Prop> = ({ comments }) => (
  <>
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </>
);
