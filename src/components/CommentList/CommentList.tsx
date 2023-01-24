import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

interface Props {
  comments: Comment[];
}

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="CommentList">
      <ul className="comments__items">
        {comments.map(comment => (
          <li className="comments__item" key={comment.id}>
            <CommentInfo comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
};
