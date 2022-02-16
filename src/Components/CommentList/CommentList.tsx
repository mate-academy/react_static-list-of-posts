import React from 'react';
import './CommentList.scss';

import { Comment } from '../../Types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = (props) => {
  const { comments } = props;

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id} className="comment__list">
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  );
};
