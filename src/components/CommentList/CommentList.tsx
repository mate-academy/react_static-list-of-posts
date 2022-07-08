import React from 'react';
import { Comment } from '../../type/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <footer className="card-footer">
    {comments.map(comment => (
      <CommentInfo comment={comment} />
    ))}
  </footer>
);
