import React from 'react';
import './CommentInfo.scss';
import { CommentType } from '../../types/CommentType';

type Props = {
  comment: CommentType;
};

export const CommentInfo:React.FC <Props> = ({ comment }) => (
  <li className="CommentInfo">
    <p>{comment.name}</p>
    <p>{comment.body}</p>
    <p>{comment.email}</p>
  </li>
);
