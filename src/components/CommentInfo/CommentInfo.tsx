import React from 'react';
import { CommentTypes } from '../../types/commentTypes';

type Props = {
  comment: CommentTypes
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">
        {comment.name}
      </strong>

      {' by '}

      <a
        className="CommentInfo__email"
        href={`mailto:${comment.email}`}
      >
        {comment.email}
      </a>
    </div>

    <div className="CommentInfo__body">
      {comment.body}
    </div>
  </>
);
