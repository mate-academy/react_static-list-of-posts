import React from 'react';
import './CommentList.scss';
import { Comment } from '../../app.typedef';
import { CommentInfo } from '../CommentInfo/CommentInfo';

interface Props {
  comments: Comment[];
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comments-list">
    {comments.map(comment => (
        <li key={comment.id} className="comments-list__item">
          <CommentInfo comment={comment} />
        </li>
      );
    })}
  </ul>
);
