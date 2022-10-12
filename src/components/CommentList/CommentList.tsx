import React from 'react';
import { Comment } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[]
};
export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <ul className="CommentList">
      {comments.map((comment: Comment) => (
        <li>
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  );
};
