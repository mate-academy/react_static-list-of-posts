import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type CommentListProps = {
  comments: Comment[],
};

export const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <div className="commentList">
    <h3 className="commentList__title">Comments:</h3>

    <ul className="commentList__list">
      {comments.map(comment => (
        <li key={comment.id} className="commentList__item">
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  </div>
);
