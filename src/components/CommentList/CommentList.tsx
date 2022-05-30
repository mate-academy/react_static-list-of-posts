import React from 'react';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';
import { Comment } from '../../react-app-env';

export interface Props {
  comments: Comment[];
}

export const CommentList: React.FC<Props> = ({ comments = [] }) => (
  <>
    <div className="notification">
      Comments:
      <ul>
        {comments.map(comment => (
          <li className="box" key={comment.id}>
            <CommentInfo comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  </>
);
