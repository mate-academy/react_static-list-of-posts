import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul>
    {comments.map(({ name, body, email }) => (
      <li>
        <CommentInfo name={name} body={body} email={email} />
      </li>
    ))}
  </ul>
);
