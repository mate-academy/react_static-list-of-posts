import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <CommentInfo
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        </li>
      ))}
    </ul>
  </div>
);
