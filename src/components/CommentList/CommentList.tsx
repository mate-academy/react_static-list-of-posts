import React from 'react';
import './CommentList.scss';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comment-list" data-cy="comments-list">
    {comments.map(comment => (
      <li key={comment.id}>
        <CommentInfo
          name={comment.name}
          body={comment.body}
          email={comment.email}
        />
      </li>
    ))}
  </ul>
);
