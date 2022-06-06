import React from 'react';
import './CommentList.scss';

import { Comment } from '../../types';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="list-group">
    <div className="p-2 fs-4 text-dark text-gradient fw-semibold mb-3">
      Comments:
    </div>
    {comments.map((comment: Comment) => (
      <li
        key={comment.id}
        className="
          list-group-item
          list-group-item-light
          mb-3
          border
          w-75
          ms-5
          listItem
          border-dark
          rounded-3
          shadow
        "
      >
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
