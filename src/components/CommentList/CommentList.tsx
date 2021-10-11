import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './Comment.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="post__comments">
    <span className="post__comments-title">Comments</span>
    <ul className="post__comments-list">
      {comments.map(comment => (
        <li className="post__comments-item comment">
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  </div>
);
