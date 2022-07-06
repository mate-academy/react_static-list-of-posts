import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comments[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="comments">
    <ul className="comments__list">
      {comments.map(comment => (
        <li className="comments__item">
          <CommentInfo
            name={comment.name}
            body={comment.body}
            email={comment.email}
          />
        </li>
      ))}
    </ul>
  </div>
);
