import React from 'react';
import './CommentList.scss';
import { Comment } from '../../types/comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comment__list">
    {comments.map(comment => (
      <>
        <li className="comment__body" key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      </>
    ))}
  </ul>
);
