import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = (props) => {
  const { comments } = props;

  return (
    <ul className="list-group">
      Comments:
      {
        comments.map(comment => (
          <li key={comment.id} className="list-group-item">
            <CommentInfo comment={comment} />
          </li>
        ))
      }
    </ul>
  );
};
