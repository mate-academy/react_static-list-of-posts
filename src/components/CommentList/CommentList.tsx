import React from 'react';
import './CommentList.scss';
import Comment from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <ul className="comments-list">
      {comments.map(comment => (
        <li className="comments-list__item" key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  </>
);
