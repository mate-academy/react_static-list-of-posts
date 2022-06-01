import React from 'react';
import { Comment } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

interface CommentListProps {
  comments: Comment[]
}

export const CommentList: React.FC<CommentListProps> = ({
  comments,
}: CommentListProps) => (
  <>
    {comments.map((comment: Comment) => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </>
);
