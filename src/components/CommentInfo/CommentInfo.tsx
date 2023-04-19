import React from 'react';
import { Comment } from '../../types/types';

type Props = {
  comment: Comment;
  idOfPost: number;
};

export const CommentInfo: React.FC<Props> = ({ comment, idOfPost }) => (
  <div className="CommentInfo" postId={idOfPost}>
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">
        {comment.name}
      </strong>

      {' by '}

      <a
        className="CommentInfo__email"
        href={`mailto:${comment.email}`}
      >
        <>{comment.email}</>
      </a>
    </div>

    <div className="CommentInfo__body">
      {comment.body}
    </div>
  </div>
);
