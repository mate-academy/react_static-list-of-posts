import React from 'react';
import { Comment } from '../../Types';
import { CommentInfo } from '../CommentInfo';
import './Style.css';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div>
      <span className="title">Comments</span>
      <ul className="list-comment">
        {comments.map((comment => (
          <li key={comment.id}>
            <CommentInfo comment={comment} />
          </li>
        )))}
      </ul>
    </div>
  );
};
