import React from 'react';
import { Comment } from '../type/Post';

interface Props {
  comment: Comment
}

export const CommentInfo:React.FC<Props> = ({ comment }) => (
  <>
    {`Коментує: ${comment.name}:`}
    <div>{`Email: ${comment.email}`}</div>
    <div>{`comment-text: ${comment.body}`}</div>
  </>
);
