/* eslint-disable max-len */
import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="CommentList">
    <li>
      {comments.map(comment => (<CommentInfo comment={comment} key={comment.id} />))}
    </li>
  </ul>
);
