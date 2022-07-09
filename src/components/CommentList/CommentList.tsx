import React from 'react';
import './CommentList.scss';

import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="comment">
    <ul className="comment__list">
      {comments.map(comment => (
        <li className="comment__item" key={comment.id}>
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
