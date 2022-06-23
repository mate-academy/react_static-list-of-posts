import React from 'react';
import './CommentList.scss';
import { Comment } from '../../types/interfaces';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comment-list">
    {comments.map(comment => (
      <li key={comment.id} className="comment-list__item">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);

export default CommentList;
