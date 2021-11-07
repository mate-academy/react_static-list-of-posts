import React from 'react';
import { Comments } from '../type/Post';

type CommentInfoType = {
  comment: Comments
};

export const CommentInfo:React.FC<CommentInfoType> = ({ comment }) => (
  <>
    {`Коментує: ${comment.name}:`}
    <div>{`Email: ${comment.email}`}</div>
    <div>{`comment-text: ${comment.body}`}</div>
  </>
);
