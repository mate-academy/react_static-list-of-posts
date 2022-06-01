import React from 'react';
import './CommentList.scss';

import { Comment } from '../../app.typedef';
import { CommentInfo } from '../CommentInfo/CommentInfo';

interface Props {
  comments: Comment[];
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="comment-list">
    <h4 className="comment-list__title">Comments</h4>
    <ul>
      {comments.map(comment => {
        return (
          <li key={comment.id}>
            <CommentInfo comment={comment} />
          </li>
        );
      })}
    </ul>
  </div>
);
