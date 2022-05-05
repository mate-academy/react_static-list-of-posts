import React from 'react';
import './CommentInfo.scss';
import { Comments } from '../../types/interfaces';

export const CommentInfo: React.FC<Comments> = ({
  name,
  email,
  body,
}) => (
  <li className="CommentInfo__element">
    <h3 className="CommentInfo__title">
      {name}
    </h3>
    <span>
      {email}
    </span>
    <p>
      {body}
    </p>
  </li>
);
