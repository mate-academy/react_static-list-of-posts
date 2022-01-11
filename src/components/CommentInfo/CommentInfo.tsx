import React from 'react';
import { Comment } from '../../Types/Types';

type Props = {
  comment: Comment;
};

export const CommentInfo:React.FC<Props> = (props) => {
  return (
    <div>
      <h4>{props.comment.name}</h4>
      {' - '}
      <a href={props.comment.email}>{props.comment.email}</a>
      <p>{props.comment.body}</p>
    </div>
  );
};
