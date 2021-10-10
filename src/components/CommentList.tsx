import React from 'react';
import { Comment } from '../types/Comment';
import { CommentInfo } from './CommentInfo';
import './ComponentsStyles.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = props => {
  const { comments } = props;

  return (
    <>
      Comments:
      {comments.map((comment: Comment) => (
        <ul>
          <li className="comment_li" key={comment.id}>
            <CommentInfo comment={comment} />
          </li>
        </ul>
      ))}
    </>
  );
};
