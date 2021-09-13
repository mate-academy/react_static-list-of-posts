import React from 'react';
import { Comments } from '../../Types';
import { CommentInfo } from '../CommentInfo';
import './Style.css';

type Props = {
  comments: Comments[],
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div>
      <ul className="list-comment">
        <span className="title">Comments</span>
        {comments.map((comment => (
          <li key={comment.id}>
            <CommentInfo comment={comment} />
          </li>
        )))}
      </ul>
    </div>
  );
};
