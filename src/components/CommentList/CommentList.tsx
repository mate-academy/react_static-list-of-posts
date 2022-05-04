import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../type/comment';
import './CommentList.scss';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul data-cy="comments-list" className="comment-list">
    {comments.map(elem => (
      <li className="comment-list__item" key={elem.id}>
        <CommentInfo comment={elem} />
      </li>
    ))}
  </ul>
);
