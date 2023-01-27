import React from 'react';

import './CommentList.scss';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[];
  message: string;
};

export const CommentList: React.FC<Props> = ({ comments, message }) => (
  <ul className="CommentList">
    {comments.length > 0 ? (
      comments.map(comment => (
        <CommentInfo comment={comment} />
      ))
    ) : <b data-cy="NoCommentsMessage">{message}</b> }
  </ul>
);
