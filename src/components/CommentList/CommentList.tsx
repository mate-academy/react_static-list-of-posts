import React from 'react';
import { Comment } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="CommentList">
    {
      comments.map((comment : Comment) => (
        <li key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      ))
    }
  </ul>
);
