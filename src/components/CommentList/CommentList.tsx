import React from 'react';
import './CommentList.scss';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="comments">
    <ul className="comments-list">
      {comments.map(comment => (
        <li className="comments-info" key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  </div>

);
