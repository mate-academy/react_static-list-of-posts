import React from 'react';
import { Comments } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comments[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <ul className="post__comments comments">
      <li className="comments__title">
        Comments
      </li>
      {comments.map(comment => (
        <li key={comment.id} className="comments__comment">
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  );
};
