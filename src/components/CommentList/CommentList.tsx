import React from 'react';
import { IComment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type CommentListProps = {
  comments: IComment[],
};

export const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <div className="CommentList">
    <h3 className="CommentList__title">Comments:</h3>

    <ul className="CommentList__list">
      {comments.map(comment => (
        <li key={comment.id} className="CommentList__item">
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  </div>
);
