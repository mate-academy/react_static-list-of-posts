import React from 'react';
import './CommentList.scss';
import { Comment } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="CommentList">
    {
      comments.map((comment) => (
        <CommentInfo key={comment.id} comment={comment} />
      ))
    }
  </ul>
);
