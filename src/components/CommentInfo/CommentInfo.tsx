import React from 'react';
import { Comment } from '../../types/Types';
import './CommentInfo.scss';

type Props = {
  note: Comment,
};

export const CommentInfo: React.FC<Props> = ({ note }) => (
  <>
    <p data-cy="comment-name" className="comment__name">
      {note.name}
    </p>

    <p data-cy="comment-body" className="comment__body">
      {note.body}
    </p>

    <p data-cy="comment-email" className="comment__mail">
      {note.email}
    </p>
  </>
);
