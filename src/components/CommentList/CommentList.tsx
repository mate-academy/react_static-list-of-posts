import React from 'react';
import { Comment } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

interface Prop {
  comments: Comment[]
}

export const CommentList: React.FC<Prop> = ({ comments }) => (
  <>
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </>
);
