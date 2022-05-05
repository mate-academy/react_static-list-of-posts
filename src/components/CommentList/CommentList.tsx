import React from 'react';

import { Comment } from '../../Types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[] | null,
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comments-list" data-cy="comments-list">
    <h3 className="comments-list__title">Comments:</h3>
    {
      comments
        ? comments.map((comment) => (
          <li key={comment.id}>
            <CommentInfo
              name={comment.name}
              body={comment.body}
              email={comment.email}
            />
          </li>
        ))
        : 'No comments'
    }
  </ul>
);
