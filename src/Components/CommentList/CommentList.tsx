import React from 'react';
import { Comment } from '../../api/Types/Interfaces';
import { CommentInfo } from '../CommentInfo/CommentInfo';

interface Props {
  comments: Comment[];
}

export const CommentsList: React.FC<Props> = (props) => (
  <ul className="postList__commentList">
    {props.comments.map(comment => (
      <li key={comment.id}>
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
