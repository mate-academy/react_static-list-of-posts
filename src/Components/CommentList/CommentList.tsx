import React from 'react';
import './CommentList.scss';
import { Comment } from '../../Types/comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

interface Props {
  comments: Comment[],
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul data-cy="comments-list" className="comment-list">
    {comments.map((comment) => (
      <li className="comment-list__item" key={comment.id}>
        <CommentInfo
          name={comment.name}
          body={comment.body}
          email={comment.email}
        />
      </li>
    ))}
  </ul>
);
