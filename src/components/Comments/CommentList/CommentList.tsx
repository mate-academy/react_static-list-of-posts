import React from 'react';
import { Comment } from '../../../typedefs';
import { CommentInfo } from '../CommentInfo/CommentInfo';

interface Props {
  comments: Comment[];
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comments">
    {comments.length
      ? comments.map((comment) => (
        <li key={comment.id} className="comments__item">
          <CommentInfo comment={comment} />
        </li>
      ))
      : 'No comments here'}
  </ul>
);
