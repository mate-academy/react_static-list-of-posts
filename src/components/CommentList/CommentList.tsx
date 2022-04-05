import React from 'react';
import { Coment } from '../Types/Types';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Coment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <ul data-cy="comments-list">
      {comments.map(item => (
        <li key={item.id}>
          <CommentInfo comment={item} />
        </li>
      ))}
    </ul>
  </>
);