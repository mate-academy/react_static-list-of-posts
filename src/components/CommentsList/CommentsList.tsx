import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comment: Comment[];
};

export const CommentsList: React.FC<Props> = ({ comment }) => (
  <ul className="CommentsList" data-cy="comments-list">
    {comment.map((item) => (
      <li key={item.id}>
        <CommentInfo
          name={item.name}
          email={item.email}
          body={item.body}
        />
      </li>
    ))}
  </ul>
);
