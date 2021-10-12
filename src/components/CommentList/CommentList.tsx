import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comments[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="Comments">
    <h3 className="Comments__title">Comments</h3>
    <ul className="Comments__list">
      {comments.map((comment: Comments) => (
        <li className="Comments__item" key="comment.id">
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  </div>
);
