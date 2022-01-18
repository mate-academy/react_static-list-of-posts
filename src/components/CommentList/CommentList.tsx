import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export type Props = {
  comments: Comments[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="commentsList">
    {comments.map(comment => (
      <li key={comment.id} className="commentsList__item">
        <CommentInfo
          name={comment.name}
          text={comment.body}
          email={comment.email}
        />
      </li>
    ))}
  </ul>
);
