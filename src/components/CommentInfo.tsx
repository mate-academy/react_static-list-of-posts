import React from 'react';
import { CommentType } from '../types/CommentType';

export const CommentInfo: React.FC<CommentType> = ({
  name,
  body,
  email,
}) => (
  <>
    <span className="comment__name">{name}</span>
    <p className="comment__body">
      {body}
    </p>
    <p>
      {'e-mail: '}
      {email}
    </p>
  </>
);
